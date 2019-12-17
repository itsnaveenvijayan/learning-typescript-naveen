// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<button type="button" class="btn btn-default">Default</button>`;

interface ICar {
  Color: string;
  Make: string;
  doStartEngine:() => void; 
}

class Fiat implements ICar{
  Color: string;
  Make: string;

  constructor(color: string){
    this.Color = color;
    this.Make = 'Fiat';
  }

  doStartEngine: () => {

  }
}

class Ambassador implements ICar{
  Color: string;
  Make: string;

  constructor(color: string, make: string){
    this.Color = color;
    this.Make = 'Ambassador';
  }

  doStartEngine: () => {

  }
}