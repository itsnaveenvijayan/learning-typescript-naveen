// Import stylesheets
import './style.css';

const msgBox: HTMLElement = document.getElementById('messageBox');
const selectCar: HTMLElement = document.getElementById('selectCar');
const color = document.getElementById('color');
const btn: HTMLElement = document.getElementById('btn');

let startEngine = (): void => {
    let selectedcar = ((<HTMLInputElement>selectCar).value).toString();
    
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
