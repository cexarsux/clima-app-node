const axios = require('axios');

const apiKey = 'a31df6d69f902a06b7a25c572742e8d3';

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${apiKey}&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}