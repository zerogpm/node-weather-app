const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
  address: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
  .alias('help', 'h')
  .argv;

console.log(argv.address);
let address = encodeURIComponent(argv.address);
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyB4_LCaoZYowjQGbzidNEWiQkzXBBmsufk`,
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`latitude : ${body.results[0].geometry.location.lat}`);
  console.log(`longitude : ${body.results[0].geometry.location.lng}`);
});