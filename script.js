const URL = 'https://api.ipify.org?format=json';

window.onload = function() {
    displayIP();
}

async function displayIP() {
    let ip = await requestIP();   
    let ipBlock = document.getElementById("ip-value");
    ipBlock.innerHTML = ip;     
}

async function requestIP() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data.ip;
    } catch (error) {
        return 'ERROR WHEN GET IP';
    }
}