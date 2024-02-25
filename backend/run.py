"""Runs the app"""

from app import creat_app
from config import Config

if __name__ == '__main__':
    app=creat_app(Config)
    app.run()