"""Have all the logics related to creating, updating articles"""

from flask_restx import Namespace, Resource

article_ns=Namespace('article',description="A namespace for artciels")
