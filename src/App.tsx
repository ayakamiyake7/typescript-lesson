import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.json'

type USERS = typeof Data;

let dummy:number = 2;
interface NAME {
  first: string;
  last: string | null
}
let nameObj:NAME = {first: 'Smith', last: null}
console.log(nameObj);

const func1 = (x: number, y: number):number => {
  return x + y
}

//intersection types
type PROFILE = {
  age: number;
  city: string;
}
type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN

const userA: USER = {
  age: 30,
  city: 'London',
  username: 'xxx',
  password: 'yyy'
}


//Union types
let value: string | boolean | number
value = false;
value = 'aaa'

let arrayUni: (string | number)[]
arrayUni = [1,2,'hello']

let company: 'Facebook' | 'Google' | 'Apple'
company = 'Google'
company = 'Apple'

let memory: 1 | 100
memory = 100

//typeof
let msg: string='Hi'
let msg2: typeof msg;
msg2 = '12'

let animal = { dog: "shetland sheepdog", num: 3, true: false, }
let newAnimal: typeof animal = { dog: "poodle", num: 1000, true: true }
console.log(newAnimal);

//keyof
type KEYS = {
  primary: 'number'
  second: 'boolean'
}
let key: keyof KEYS
key = 'second'

//typeof + keyof
const SPORTS = {
  soccer: 'Soccer',
  baseball: 'Baseball'
}

let keySports: keyof typeof SPORTS
keySports = 'baseball'

//enum
enum OS {
  Windows,
  Mac,
  Linux
}
interface PC {
  ID: number,
  OSType: OS,
}
const PC1: PC = {
  ID: 1,
  OSType: OS.Windows,
}

////////////////////////////////
const comp1 = "test"
let comp2:string = comp1

let comp3:string = 'test3'
// let comp4: 'test' = comp3

let funcComp1 = (x:number) => {}
let funcComp2 = (x:string) => {}

// funcComp2 = funcComp1

//Generics
interface GEN<T> {
  item: T
}
const gen0:GEN<string> = { item: 'hello'}

interface GEN1<T = string> {
  item: T
}
const gen1:GEN1 = { item: 'hello'}

interface GEN2<T extends string | number | boolean> {
  item: T
}
const gen4: GEN2<boolean> = { item: true}

function funcGen<T>(props: T) {
  return {item: props}
}
const gen6 = funcGen<string | number>(2)

function funcGen1<T extends string | null>(props: T) {
  return {value: props}
}
const gen8 = funcGen1('3')

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return {value: props.price}
}
const gen10 = funcGen3({price: 100})

const funcGen4 = <T extends Props>(props: T) => {
  return {value: props.price} 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
