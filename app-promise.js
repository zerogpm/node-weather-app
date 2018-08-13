const yargs = require('yargs');
const axios = require('axios');
require('dotenv').config();

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
  .help()
  .alias('help', 'h')
  .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  try {
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherURL = `https://api.darksky.net/forecast/${process.env.apiKey}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
  } catch (e) {
    console.log('Unable to find the location');
  }
}).then((response) => {
  try {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Its currently ${temperature}. It feels like ${apparentTemperature}`);
  } catch (e) {
    console.log('No Data come back');
  }

}).catch((error) => {
  if (error.response.status === 404) {
    console.log('Unable to connect to API');
  }
});