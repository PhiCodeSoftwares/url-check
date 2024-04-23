import requests
import json
import os
from src.models.response import *

def check_url(url) -> ResponseModel:
    api_key = os.getenv('GOOGLE_SAFE_BROWSING_API_KEY')
    if not api_key:
        print('API key not found in environment variables.')
        return ResponseModel(API_ERROR_CODE, API_ERROR_MESSAGE)

    url_to_check = f'https://safebrowsing.googleapis.com/v4/threatMatches:find?key={api_key}'

    threat_entry = {
        'client': {
            'clientId': 'Phi Code Softwares - Security',
            'clientVersion': '1.5.2'
        },
        'threatInfo': {
            'threatTypes': ['MALWARE', 'SOCIAL_ENGINEERING'],
            'platformTypes': ['ANY_PLATFORM'],
            'threatEntryTypes': ['URL'],
            'threatEntries': [
                {'url': url},
            ],
        },
    }

    headers = {
        'Content-Type': 'application/json',
    }

    response = requests.post(url_to_check, headers=headers, data=json.dumps(threat_entry))
    data = response.json()
    
    if 'error' in data:
        print('API error.')
        return ResponseModel(API_ERROR_CODE, API_ERROR_MESSAGE)

    if 'matches' in data and len(data['matches']) > 0:
        threat = data['matches'][0]['threat']
        print(threat)

        return ResponseModel(URL_DANGER_CODE, URL_DANGER_MESSAGE)

    print('URL seems safe.')
    return ResponseModel(URL_SEEM_OK_CODE, URL_SEEM_OK_MESSAGE)

if __name__ == "__main__":
    url = 'https://diptanil03.github.io/Netflix-Clone'
    check_url(url)