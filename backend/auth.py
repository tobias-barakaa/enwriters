"""Contains all authentication logics"""

from flask_restx import Api, Namespace, fields, Resource
from models import User 
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (JWTManager, 
get_jwt_identity, create_access_token, create_refresh_token, jwt_required)
from flask import Flask, request, jsonify, make_response

auth_ns=Namespace('auth', description="A namespace for our authentication")

signup_model=auth_ns.model(
    'SignUp',
    {   "id":fields.Integer(),
        "username":fields.String(),
        "email":fields.String(),
        "password":fields.String()

    }
)

login_model=auth_ns.model(
    "Login",
    {
        'username':fields.String(),
        'pasword':fields.String()
    }
)

@auth_ns.route('/signup')
class SignUp(Resource):
    @auth_ns.marshal_with(signup_model)
    @auth_ns.expect(signup_model)
    @jwt_required()
    def post(self):
        data=request.get_json()

        username=data.get('username')
        db_user=User.query.filter(username=username).first()

        if db_user is not None:
            return jsonify({"message":f"User with username {username} already exist."})

        new_user=User(
            username=data.get('username'),
            email=data.get('email'),
            password=generate_password_hash(data.get('password'))
        )

        new_user.save()
        return make_response(jsonify({"message":"User created successfuly"}), 201)

@auth_ns.route('/login')
class Login(Resource):
    @auth_ns.expect(login_model)
    def post(self):
        data=request.get_json()

        username=data.get('username')
        password=data.get('password')

        db_user=User.query.filter_by(username=username).first()

        if db_user and check_password_hash(db_user.password,password):
            access_token=get_access_token(identity=db_user.username)
            refresh_token=create_refresh_token(identity=db_user.username)

            return jsonify(
                {"access_token": access_token, "refresh_token": refresh_token}
            )

@auth_ns.route('/referesh')
class RefereshResource(Resource):
    @jwt_required(refresh=True)
    def post(self):

        current_user=get_jwt_identity()

        new_access_token=create_access_token(identity=current_user)

        return make_response(jsonify({"access_token":new_access_token}), 200)
