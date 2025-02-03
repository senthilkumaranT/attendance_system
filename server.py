from flask import Flask, request
from db import connect_db
from backend.login.login import login_routes
from backend.signup.signup import signup_routes
import os

app = Flask(__name__)

# Connect to MongoDB
connect_db()

# Use routes
app.register_blueprint(login_routes, url_prefix='/login')
app.register_blueprint(signup_routes, url_prefix='/signup')

# Start the server
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 5000))
    app.run(port=PORT)