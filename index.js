// Function to check URL with Safe Browsing API
function checkUrl(url, apiKey) {
    const urlToCheck = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`;
  
    const threatEntry = {
      client: {
        clientId: 'Phi Code Softwares - Security',
        clientVersion: "1.5.2"
      },
      threatInfo: {
        threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
        platformTypes: ['ANY_PLATFORM'],
        threatEntryTypes: ['URL'],
        threatEntries: [
          { url: url },
        ],
      },
    };
  
    const fetchData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(threatEntry),
    };
  
    fetch(urlToCheck, fetchData)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.matches && data.matches.length > 0) {
            //console.log(data);
            
            const threat = data.matches[0].threat
            console.log(threat)
        } else {
          console.log('URL seems safe.');
        }
      })
      .catch(error => console.error('Error checking URL:', error));
  }

// Example usage
const suspiciousUrl_1 = 'https://diptanil03.github.io/Netflix-Clone';
const suspiciousUrl_2 = 'http://confirmdasbordprofesionl.github.io/introductions-comfrotanalrt/busines';
const suspiciousUrl = 'www.google.com'

const yourApiKey = ''; // Replace with your actual API key

checkUrl(suspiciousUrl, yourApiKey);
  