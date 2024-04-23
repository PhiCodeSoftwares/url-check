from flask import Blueprint
from flask import request
from src.models.response import *

safe_browsing_bp = Blueprint('safe_browsing_blueprint', __name__)

@safe_browsing_bp.route('/', methods=['POST'])
def check():
    if request.is_json == False:
        return "No JSON data found in the request body.", 400
    
    data = request.get_json()
    
    if "url" in data:
        from src.service.url_check_google import check_url

        url = data["url"]
        responseData = check_url(url)

        print(responseData)

        return responseData.toDict(), 200
    else:
        return ResponseModel(API_FIELD_URL_NOT_FOUND_CODE, API_FIELD_URL_NOT_FOUND_MESSAGE), 400