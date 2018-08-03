const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20steet%20philadelphia&key=AIzaSyB4_LCaoZYowjQGbzidNEWiQkzXBBmsufk',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`latitude : ${body.results[0].geometry.location.lat}`);
  console.log(`longitude : ${body.results[0].geometry.location.lng}`);
});