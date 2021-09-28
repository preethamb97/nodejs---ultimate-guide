import * as _ from 'lodash';
console.log('hello world');

async function a() {
  console.log('test')
}


let lucky: any = 23;

lucky = 'test';

// automatically any type
let luck;
luck = 'test';

let counter: number = 24;

let name: string = 'preetham';


// creating own type

type Style = string;
let font: Style;

type Style1 = 'bold' | 'italic';
let font1: Style1;
// error
// font1 = 'test';
font1 = 'bold';


interface Person {
  first: string;
  last: string;
  [key: string]: any
}


const person1: Person = {
  first: 'Jeff',
  last: 'bezzos',
};

const person2: Person = {
  first: 'john',
  last: 'cena',
  fast: true,
};




function pow(x: number, y: number) : string{
  return Math.pow(x,y).toString();
}

pow(2,4);