from flask import Flask
from api.safe_browsing_google.safe_browsing_google import safe_browsing_bp
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

app.register_blueprint(safe_browsing_bp, url_prefix='/api/url-check')

@app.route('/')
def index():
    return 'Api to check if url is safe.'

if __name__ == '__main__':
    app.run(debug=True)
