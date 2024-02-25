from exts import db 

from typing import Optional
import sqlalchemy as sa
import sqlalchemy.orm as so


# Articles model
class Article(db.Model):
    id=db.Column(db.Integer(), primary_key=True)
    title=db.Column(db.String(), nullable=False)
    description=db.Column(db.String(),nullable=False)
    keywords=db.Column(db.String(), nullable=False)
    words=db.Column(db.String(), nullable=False)
    duration=db.Column(db.Integer(), nullable=False)
    cost=db.Column(db.Integer(), nullable=False)
    author=db.Column(db.String(), nullable=False)


    def __repr__(self):
        return '<Article {}>'.format(self.title)
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def update(self, title, description):
        self.title=title
        self.description=description

        db.session.commit()

# User Model
    
class User(db.Model):
    id=db.Column(db.Integer(), primary_key=True)
    username=db.Column(db.String(25), primary_key=True, unique=True)
    email=db.Column(db.String(80), primary_key=True, unique=True)
    password=db.Column(db.Text(), primary_key=True)

    def __repr__(self):
        return f"<User {self.username}>"
