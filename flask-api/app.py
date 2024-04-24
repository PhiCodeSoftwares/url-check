from flask import Flask
from src.safe_browsing_google_blueprint.safe_browsing_google import safe_browsing_bp
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(safe_browsing_bp, url_prefix='/api/url-check')

CORS(app)

@app.route('/api/status')
def index():
    return { 'message': 'Api ON' }, 200
