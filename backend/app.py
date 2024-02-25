from flask import Flask, request
from flask_restx import Api, Resource, fields
from config import Config
from models import User
from exts import db


app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
api=Api(app,doc='/docs')

# model serializer for exposing the model to json.
user_model=api.model(
    "User",
    {
        "id": fields.Integer(),
        "Username":fields.String(),
        "email":fields.String(),
        "password":fields.String()
    }
)

@api.route('/hello')
class HelloResource(Resource):
    def get(self):
        return {"Hello": "Hello, Welcome to enwriters"}
        

@api.route('/users')
class UsersResource(Resource):
    @api.marshal_list_with(user_model)
    def get(self):
        """Get all users ffrom the db"""
        users=Users.querry.all()
        return users

    @api.marshal_with(user_model)
    def post(self):
        """create a new user"""
        data=request.get_json()

        new_user=User(
            username=data.get('username')
        )
        new_user.save()
        return new_user, 201

@api.route('/user/<int:id>')
class UserResource(Resource):
    @api.marshal_with(user_model)
    def get(self, id):
        """Get user by id"""
        user=user.query.get_or_404(id)

        return user

    @api.marshal_with(user_model)
    def put(self,id):
        """update a user"""
        user_to_update=User.query.get_or_404(id)

        data=request.get_json()
        user_to_update.update(data.get("username"))

        return user_to_update

    @api.marshal_with(user_model)
    def delete(self, id):
        """deleting by id"""
        user_to_delete=User.query.get_or_404(id)
        user_to_delete.delete()
        return user_to_delete



       

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User}

if __name__ == '__main__':
    app.run()