from flask import Flask
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
        "email":fields.email,
        "password":fields.String()
    }
)

@api.route('/hello')
class HelloResource(Resource):
    def get(self):
        return {"Hello": "Hello, Welcome to enwriters"}
        

@api.route('/users')
class UsersResource(Resource):
    def get(self):
        """Get all users ffrom the db"""
        users=Users.querry.all()
        return users

    def post(self):
        """create a new user"""
        pass

@api.route('/user/<int:id>')
class UserResource(Resource):
    def get(self, id):
        """Get user by id"""
        pass

    def put(self,id):
        """update a user"""
        pass

    def delete(self, id):
        """deleting by id"""
        pass




@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User}

if __name__ == '__main__':
    app.run()