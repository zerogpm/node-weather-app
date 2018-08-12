var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be number');
      }
    }, 1500);
  })
};

asyncAdd(5,7).then((result) => {
  console.log('Result:', result);
}, (errorMessage) => {
  console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('Hey. It works');
//     reject('unable to fulfill promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success ', message);
// }, (errorMessage) => {
//   console.log('Errors', errorMessage);
// });