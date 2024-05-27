const IP_SERVICE_URL = 'https://api.ipify.org?format=json';
const DB_SERVICE_API_KEY = 'AKfycbxG6qTQI9WQObBHv92dFBCc0eRIt8tbodYXzDa0ZEO1RhP2NZY4kuHPA7RbWQJfxyjX6w';
const DB_SERVICE_URL = `https://script.google.com/macros/s/${DB_SERVICE_API_KEY}/exec`;

 window.onload = async function() {
    let ip = await requestIP();   
    displayIP(ip);
    storeIP(ip);
}

async function displayIP(ip) {
    let ipBlock = document.getElementById("ip-value");
    ipBlock.innerHTML = ip;     
}

async function requestIP() {
    try {
        const response = await fetch(IP_SERVICE_URL);
        const data = await response.json();
        return data.ip;
    } catch (error) {
        return 'ERROR WHEN GET IP';
    }
}

function storeIP(ip) {
    let formData = new FormData();
    formData.append('IP', ip);
    formData.append('Date', getCurrentDateTime());
    
    fetch(DB_SERVICE_URL, {
        method: 'POST',
        body: formData
    })
}

function getCurrentDateTime() { 
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
}