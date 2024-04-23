from flask import Flask
from src.safe_browsing_google.safe_browsing_google import safe_browsing_bp
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(safe_browsing_bp, url_prefix='/api/url-check')

CORS(app)

@app.route('/')
def index():
    return 'Api to check if url is safe.'
