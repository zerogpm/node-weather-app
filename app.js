const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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

let geocodeCheck = new geocode(argv.address, request);
geocodeCheck.geocodeAddress();