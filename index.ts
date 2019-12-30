// Import stylesheets
import './style.css';

const msgBox: HTMLElement = document.getElementById('messageBox');
const msgBox2: HTMLElement = document.getElementById('messageBox2');
const selectCar: HTMLElement = document.getElementById('selectCar');
const color = document.getElementById('color');
const btn: HTMLElement = document.getElementById('btn');
const addbtn: HTMLElement = document.getElementById('addbtn');
const inputnumbers: HTMLElement = document.getElementById('numbers');

let addNumbers = (): void => {
  msgBox2.innerHTML = '';
  let val: string = (<HTMLInputElement>inputnumbers).value;
  msgBox2.append(sum(val).toString());
}

let sum = (input: string): number | string => {  
  var array: any = convertToArray(input) 
  let sum: (string | number) = array.reduce((a, b) : (string | number) => a + b) || input.split(',').join('');
  return sum;
}

let convertToArray = (input: string): (number | string)[] => {    
    let numbers:(number | string)[] = [];
    let split: string[] = input.split(',')

    for (let i = 0; i < split.length; i++){
      if (Number(split[i]) != null) {        
        numbers.push(+split[i]);        
      }
      else{
        numbers.push(split[i]);   
      }      
    }    
    //console.log(numbers)
    return numbers;
}

let startEngine = (): void => {
    let selectedcar:string = (<HTMLInputElement>selectCar).value;
    
    let car: ICar;
    if (selectedcar == "fiat"){
      car = new Fiat();            
    }
    else if (selectedcar == "ambassador"){
       car = new Ambassador();
    }
    car.Color = ((<HTMLInputElement>color).value).toString();
    car.doStartEngine();
}

btn.addEventListener('click', startEngine);
addbtn.addEventListener('click', addNumbers);


export interface ICar{
  Color: string;
  Make: string;
  doStartEngine(): void; 
}

export abstract class Car implements ICar {

  Color: string;
  Make: string;

  constructor() { }
  
  abstract doStartEngine = (): void => {};
}

export class Fiat extends Car{
  Make = "Fiat";

  constructor(){ super(); }

  doStartEngine = ():void => {
    msgBox.innerHTML = `started ${this.Make}`;
    msgBox.style.color = this.Color;
  }
}


export  class Ambassador extends Car{
  Make = "Ambassador";

  constructor(){ super(); }

  doStartEngine = ():void => {
    msgBox.innerHTML = `started ${this.Make}`;
    msgBox.style.color = this.Color;
  }
}

