const axios = require('axios');

const getLugarLatLng = async(dir) => {
    //esto es para que el parametro se convierta en una URL segura por ejemplo "New York" lo cambia a "New%20York"
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'a128a76544msh0f755f23373b3b5p1ff298jsne6f34729b6ec' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para '${dir}'`);
    }

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
    //console.log(argv.direccion);
}

module.exports = {
    getLugarLatLng
}