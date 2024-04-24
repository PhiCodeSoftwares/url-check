<p align="center">
  <img src="https://github.com/PhiCodeSoftwares/images-container/blob/main/banner-logo-large.png" alt="Logo">
</p>

<div align="center">
  <a href="https://github.com/mfts/papermark/stargazers"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/PhiCodeSoftwares/url-check"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"><img src="https://img.shields.io/badge/HTML-5-orange?style=flat&logo=html5&logoColor=white" alt="HTML Badge"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS-3-blue?style=flat&logo=css3&logoColor=white" alt="CSS Badge"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-ES6-yellow?style=flat&logo=javascript&logoColor=white" alt="JavaScript Badge"></a>
  <a href="https://flask.palletsprojects.com/en/2.0.x/"><img src="https://img.shields.io/badge/Flask-2.0-black?style=flat&logo=flask&logoColor=white" alt="Flask Badge"></a>
  <a href="https://github.com/mfts/papermark/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-blue"></a>
</div>

# URL Check Chrome Extension

This is an open-source Chrome extension that checks if a website is secure by verifying its URL against a database of risky URLs. It uses HTML, CSS, and JavaScript for the extension, and Flask (Python) for the API.

## Installation

1. Clone this repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable Developer mode.
4. Click on "Load unpacked" and select the `extension` folder from the cloned repository.
5. The extension should now be installed and visible in your browser toolbar.

## Safe Browsing API

This extension utilizes the Safe Browsing API from Google to check the security status of websites. The API is used to verify if a website's URL is present in the database of risky URLs maintained by Google. For more information about the Safe Browsing API, please refer to the [Google Safe Browsing API documentation](https://developers.google.com/safe-browsing).


## Usage

Click on the extension icon in the toolbar to check the security status of the current website. If the URL is found in the database of risky URLs, a warning message will be displayed.

## API

The Flask API is hosted on OnRender. You can find the API code in the `flask-api/src/service/url_check_google.py` directory of this repository. 

## Disclaimer

This extension is provided as-is, without any warranty or guarantee. We are not responsible for any damage or loss resulting from the use of this extension. Use it at your own risk.

## Contributing

Feel free to contribute to this project by forking the repository and submitting a pull request. Any contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
