import os
import sys
from pymongo import MongoClient
from pymongo.errors import ConnectionError

def connect_db():
    try:
        client = MongoClient(os.environ['MONGODB_URI'])
        print('MongoDB connected')
        return client
    except ConnectionError as error:
        print('MongoDB connection error:', error)
        sys.exit(1)

# End of Selection