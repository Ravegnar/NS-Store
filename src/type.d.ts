export interface ProductInterface extends Partial<OperativeInterface> {
  id: number
  image: string
  info: string
  name: string
  price: number
  type: string
  
  quantity: number
  position: number
  path?: string
  render?: boolean
}

export interface OperativeInterface {
  gif: string
  health: number
  icon: string
  shield: number
  specialization: string
}

export interface AppStateInterface {
  cart: ProductInterface[]
  showCart: boolean
};

export interface SelectedInterface extends Partial<ProductInterface> {
  classNames: string
}


/*  
import { ProductInterface, AppStateInterface } from './type.d';


interface Props {
  category: string
  type: string
}

export interface ProductInterface {
  id: number
  image: string
  info: string
  name: string
  price: number
  type: string

  gif?: string
  health?: number
  icon?: string
  shield?: number
  specialization: string
  
  quantity?:number
}

export interface OperativeInterface extends ProductInterface {
  gif: string
  health: number
  icon: string
  shield: number
  specialization: string
}

interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };

function myFunc(): void {
 console.log("Learning is Fun!");
}

type Quantity = 50 | 100;
let quantity: Quantity = 100;

function greet (name: string | nulll | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log("Hola!");
}

greet(undefined) 

for update: event: React.ChangeEvent for submit: event: React.FormEvent for click: event: React.MouseEvent

*/