// Import stylesheets
import './style.css';

let showalert = () => {
    alert("engine");
}

// Write TypeScript code!
const btn: HTMLElement = document.getElementById('btn');
btn.addEventListener('click', showalert);



export interface ICar {
  Color: string;
  Make: string;
  doStartEngine:() => void; 
}

export class Fiat implements ICar{
  Color: string;
  Make: string;

  constructor(color: string){
    this.Color = color;
    this.Make = 'Fiat';
  }

  doStartEngine: () => {

  }
}

export class Ambassador implements ICar{
  Color: string;
  Make: string;

  constructor(color: string, make: string){
    this.Color = color;
    this.Make = 'Ambassador';
  }

  doStartEngine: () => {
    //alert("engine");
  }
}