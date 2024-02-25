"""test_api module: All the unittest for the api endpoints"""

import unittest
from app import creat_app
from config import TestConfig
from exts import db


class APITestCase(unittest.TestCase):
    def setUp(self):
        self.app=creat_app(TestConfig)

        self.client=self.app.test_cleint(self)

        with self.app.app_context():
            db.init_app(self.app)
            db.create_all()

    def test_hello_world():
        hello_response=self.client.get('/article/hello')

        json=hello_response.json
        
        self.assertEqual(json,{"message": "Hello world"})

    def test_signup(self):
        signup_response=self.client.post('/auth/signup',
            json={"username":"testuser",
            "email":"testuser@test.com",
            "password":"password"}
        )

        status_code=signup.response.status_code
        self.assertEqual(status_code, 201)

    def test_login()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

if __name__ =="__main__":
    unittest.main()

