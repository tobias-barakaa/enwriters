from exts import db 

from typing import Optional
import sqlalchemy as sa
import sqlalchemy.orm as so



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
    
