const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

lugar.getLugarLatLng(argv.direccion).then(resp => {
    clima.getClima(resp.lat, resp.lng).then(resp => {
        console.log(`El clima en '${argv.direccion} es de ${resp}'°C.`);
    }).catch(err => {
        console.log(`ERROR: No se puede determinar el clima en ${argv.direccion}. Mensaje: ${err}`)
    });
}).catch(err => console.log);