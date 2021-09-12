const { EventEmitter } = require('events');
const { readFile, readFileSync } = require('fs');

// const { readFile } = require('fs').promises;
// can be used with await 
const eventEmitter = new EventEmitter();
console.log('hello');

// global is window in browser
global.test = 'testing';
console.log(global.test);

process.on('exit', () => {
  console.log('exit success');
});

eventEmitter.on('isCalled', () => {
  console.log('event got called');
});

const txtData = readFileSync('./hello.txt', 'utf8');
console.log(txtData, 'txtData');

readFile('./hello.txt', 'utf8', (err, txt) => {
  console.log(txt, 'txt')
});

eventEmitter.emit('isCalled');
eventEmitter.emit('isCalled');
eventEmitter.emit('isCalled');
