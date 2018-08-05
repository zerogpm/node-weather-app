class Geocode {
  constructor(address, request) {
    this.address = address;
    this.request = request;
  }

  geocodeAddress() {
    let address = encodeURIComponent(this.address);
    this.request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        console.log('Unable to connect to Google serves.');
        return;
      }

      if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address');
      }

      console.log(body.status);
      if (body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`latitude : ${body.results[0].geometry.location.lat}`);
        console.log(`longitude : ${body.results[0].geometry.location.lng}`);
      }
    });
  }
}

module.exports = Geocode;