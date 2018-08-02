console.log('Staring app');
setTimeout(() => {
  console.log('Inside a call back');
},2000);

setTimeout(() => {
  console.log('Set time out second time');
},0);

console.log('Finishing up');