// API
const ROOT_ENDPOINT = 'https://url-check-yp9o.onrender.com/api/url-check'

// API Properties
const API_CODE_KEY = 'code'

// API Reponse
const API_ERROR_CODE = 0
const API_FIELD_URL_NOT_FOUND_CODE = 1
const URL_SEEM_OK_CODE = 2
const URL_DANGER_CODE = 3

// Colors
const DEFAULT_COLOR_CLASS = 'default'
const WARNING_COLOR_CLASS = 'warning'
const SECURE_COLOR_CLASS = 'secure'
const DANGER_COLOR_CLASS = 'danger'

// Messages
const API_GENERIC_ERROR_MESSAGE = 'Unable to check this page'
const LOADING_MESSAGE = 'Loading ...'
const SEEM_OK_MESSAGE = 'URL SEEM OK'
const DANGER_MESSAGE = 'DANGER'

// Elemets
const URL_ELEMENT = 'url'
const STATUS_CONTAINER_ELEMENT = 'status-container-message'

const checkURL = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    document.getElementById(URL_ELEMENT).textContent = tab.url;

    loading(true);

    fetch(ROOT_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: tab.url })
    })
    .then(response => response.json())
    .then(data => {
        showSuccessReponse(data)
    })
    .catch(error => {
        showErrorReponse(error)
    });
}

const loading = (isShow) => {
    if (isShow) {
        showMessage(LOADING_MESSAGE);
        setStatusContainerColor(DEFAULT_COLOR_CLASS)
    }
}

const showMessage = (message) => {
    document.getElementById(STATUS_CONTAINER_ELEMENT).textContent = message;
}

const showSuccessReponse = (data) => {
    let status = ''

    if(!data.hasOwnProperty(API_CODE_KEY)) {
        showMessage(API_GENERIC_ERROR_MESSAGE);
        return
    }

    const resultCode = data[API_CODE_KEY];

    // Color default
    setStatusContainerColor(DEFAULT_COLOR_CLASS);

    // Danger class
    const warningCssColor = WARNING_COLOR_CLASS;

    switch(resultCode) {
        case API_ERROR_CODE: {
            status = API_GENERIC_ERROR_MESSAGE;
            setStatusContainerColor(warningCssColor);
            break;
        }
        case API_FIELD_URL_NOT_FOUND_CODE: {
            status = API_GENERIC_ERROR_MESSAGE;
            setStatusContainerColor(warningCssColor)
            break;
        }
        case URL_SEEM_OK_CODE: {
            status = SEEM_OK_MESSAGE
            updateSecurityBar(true)
            break;
        }
        case URL_DANGER_CODE: {
            status = DANGER_MESSAGE
            updateSecurityBar(false)
            break;
        }
    }

    showMessage(status);
}

const showErrorReponse = (error) => {
    showMessage(API_GENERIC_ERROR_MESSAGE);
}

const updateSecurityBar = (isSafe) => {
    if (isSafe === undefined) {
        setStatusContainerColor(DEFAULT_COLOR_CLASS)
    }
    else if (isSafe) {
      setStatusContainerColor(SECURE_COLOR_CLASS);
    } else {
        setStatusContainerColor(DANGER_COLOR_CLASS);
    }
}

const setStatusContainerColor = (cssClass) => {
    var securityBar = document.getElementById(STATUS_CONTAINER_ELEMENT);
    securityBar.classList.remove(DEFAULT_COLOR_CLASS, SECURE_COLOR_CLASS, DANGER_COLOR_CLASS, WARNING_COLOR_CLASS);

    securityBar.classList.add(cssClass);
}

// Main Function
checkURL()