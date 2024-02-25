from flask import Flask, request, jsonify
from flask_restx import Api, Resource, fields
from config import Config
from models import Article, User
from exts import db
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
migrate=Migrate(app,db)

api=Api(app,doc='/docs')

# model serializer for exposing the model to json.
article_model=api.model(
    "Article",
    {
        "id": fields.Integer(),
        "title":fields.String(),
        "description":fields.String(),
        "keywords":fields.String(),
        "words":fields.Integer(),
        "duration":fields.Integer(),
        "cost":fields.Integer(),
        "author":fields.String()
    }
)

signup_model=api.model(
    'SignUp',
    {   "id":fields.Integer(),
        "username":fields.String(),
        "email":fields.String(),
        "password":fields.String()

    }
)


@api.route('/hello')
class HelloResource(Resource):
    def get(self):
        return {"Hello": "Hello, Welcome to enwriters"}
        


@api.route('/signup')
class SignUp(Resource):
    # @api.marshal_with(signup_model)
    @api.expect(signup_model)
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
        return jsonify({"message":"User created successfuly"})

@api.route('/login')
class Login(Resource):
    def post(self):
        pass



@api.route('/articles')
class ArticlesResource(Resource):
    @api.marshal_list_with(article_model)
    def get(self):
        """Get all Articles from the db"""
        articles=Article.querry.all()
        return articles

    @api.marshal_with(article_model)
    @api.expect(article_model)
    def post(self):
        """create a new article"""
        data=request.get_json()

        new_article=Article(
            title=data.get('title')
        )
        new_article.save()
        return new_article, 201

@api.route('/article/<int:id>')
class ArticleResource(Resource):
    @api.marshal_with(article_model)
    def get(self, id):
        """Get article by id"""
        article=article.query.get_or_404(id)

        return article

    @api.marshal_with(article_model)
    def put(self,id):
        """update a article"""
        article_to_update=Article.query.get_or_404(id)

        data=request.get_json()
        article_to_update.update(data.get(id))

        return article_to_update

    @api.marshal_with(article_model)
    def delete(self, id):
        """deleting by id"""
        article_to_delete=Article.query.get_or_404(id)
        article_to_delete.delete()
        return article_to_delete



       

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'Article': Article}

if __name__ == '__main__':
    app.run()