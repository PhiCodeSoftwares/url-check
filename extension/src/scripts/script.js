const API_GENERIC_ERROR_MESSAGE = 'Unable to check this page'

const API_ERROR_CODE = 0
const API_FIELD_URL_NOT_FOUND_CODE = 1
const URL_SEEM_OK_CODE = 2
const URL_DANGER_CODE = 3

const checkURL = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    document.getElementById('url').textContent = tab.url;

    fetch('http://127.0.0.1:5000/api/url-check', {
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

const showSuccessReponse = (data) => {
    let status = ''

    if(!data.hasOwnProperty("code")) {
        document.getElementById('status-container-message').textContent = API_GENERIC_ERROR_MESSAGE;
        return
    }

    const resultCode = data['code'];

    // Color default
    setSecurityBarColor("default");

    switch(resultCode) {
        case API_ERROR_CODE: 
            status = API_GENERIC_ERROR_MESSAGE;
            break;
        case API_FIELD_URL_NOT_FOUND_CODE:
            status = API_GENERIC_ERROR_MESSAGE;
            break;
        case URL_SEEM_OK_CODE:
            status = "SEEM OK"
            updateSecurityBar(true)
            break;
        case URL_DANGER_CODE:
            status = "DANGER"
            updateSecurityBar(false)
            break;
    }

    document.getElementById('status-container-message').textContent = status;
}

const showErrorReponse = (error) => {
    document.getElementById('status-container-message').textContent = API_GENERIC_ERROR_MESSAGE;
}

function updateSecurityBar(isSafe) {
    if (isSafe === undefined) {
        setSecurityBarColor("default")
    }
    else if (isSafe) {
      setSecurityBarColor("secure");
    } else {
        setSecurityBarColor("insecure");
    }
}

function setSecurityBarColor(cssClass) {
    var securityBar = document.getElementById("security-bar");
    securityBar.classList.remove("default", "secure", "insecure");

    securityBar.classList.add(cssClass);
}

checkURL()