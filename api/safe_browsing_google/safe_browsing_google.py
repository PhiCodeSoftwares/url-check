from flask import Blueprint
from flask import request

safe_browsing_bp = Blueprint('safe_browsing_blueprint', __name__)

@safe_browsing_bp.route('/', methods=['GET'])
def check():
    if request.is_json == False:
        return "No JSON data found in the request body.", 400
    
    data = request.get_json()
    
    if "url" in data:
        url = data["url"]
        return f"URL encontrada: {url}"
    else:
        return "'url' attribute not found in request body.", 400