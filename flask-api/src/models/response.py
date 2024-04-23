API_ERROR_CODE = 0
API_FIELD_URL_NOT_FOUND_CODE = 1
URL_SEEM_OK_CODE = 2
URL_DANGER_CODE = 3

API_FIELD_URL_NOT_FOUND_MESSAGE = 'api_field_url_not_found'
API_ERROR_MESSAGE = 'api_error'
URL_SEEM_OK_MESSAGE = 'url_seems_ok'
URL_DANGER_MESSAGE = 'url_danger'

class ResponseModel:
    
    def __init__(self, code, message) -> None:
        self.code = code
        self.message = message        

    def toDict(self) -> dict:
        return {
            "code": self.code,
            "message": self.message
        }