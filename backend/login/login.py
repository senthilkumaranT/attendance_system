from flask import Blueprint, request, jsonify
from models.User import User  
from werkzeug.security import check_password_hash  

login_routes = Blueprint('login', __name__)

# @route   POST /login
# @desc    Login user
@login_routes.route('/', methods=['POST'])
def login_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    try:
        # Check if user exists
        user = User.objects(email=email).first()
        if not user:
            return jsonify({'message': 'Invalid credentials'}), 400

        # Check password
        if not check_password_hash(user.password, password):
            return jsonify({'message': 'Invalid credentials'}), 400

        # Successful login
        return jsonify({'message': 'Login successful', 'user': user.to_json()}), 200
    except Exception as error:
        print(error)
        return jsonify({'message': 'Server error'}), 500