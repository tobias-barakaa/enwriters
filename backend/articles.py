"""Have all the logics related to creating, updating articles"""

from flask_restx import Namespace, Resource, fields
from models import Article
from flask_jwt_extended import jwt_required

article_ns=Namespace('article',description="A namespace for artciels")
# model serializer for exposing the model to json.
article_model=article_ns.model(
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


@article_ns.route('/articles')
class ArticlesResource(Resource):
    @article_ns.marshal_list_with(article_model)
    def get(self):
        """Get all Articles from the db"""
        articles=Article.querry.all()
        return articles

    @article_ns.marshal_with(article_model)
    @article_ns.expect(article_model)
    def post(self):
        """create a new article"""
        data=request.get_json()

        new_article=Article(
            title=data.get('title')
        )
        new_article.save()
        return new_article, 201

@article_ns.route('/article/<int:id>')
class ArticleResource(Resource):
    @article_ns.marshal_with(article_model)
    def get(self, id):
        """Get article by id"""
        article=article.query.get_or_404(id)

        return article

    @article_ns.marshal_with(article_model)
    @jwt_required()
    def put(self,id):
        """update a article"""
        article_to_update=Article.query.get_or_404(id)

        data=request.get_json()
        article_to_update.update(data.get(id))

        return article_to_update

    @article_ns.marshal_with(article_model)
    @jwt_required()
    def delete(self, id):
        """deleting by id"""
        article_to_delete=Article.query.get_or_404(id)
        article_to_delete.delete()
        return article_to_delete


