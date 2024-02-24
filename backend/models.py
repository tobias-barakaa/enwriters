from exts import db 

from typing import Optional
import sqlalchemy as sa
import sqlalchemy.orm as so


class User(db.Model):
    id=db.Column(db.Integer(), primary_key=True)
    username=db.Column(db.String(),nullable=False)
    email=db.Column(db.String(), nullable=False)
    password=db.Column(db.String(), nullable=False)

    def __repr__(self):
        return '<User {}>'.format(self.username)
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def update(self, username, email):
        self.title=title
        self.email=email
    
