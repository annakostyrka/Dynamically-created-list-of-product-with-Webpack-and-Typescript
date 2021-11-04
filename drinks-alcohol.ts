import {Drinks} from "./drinks";
export class Alcohol extends Drinks {
    constructor (private name:string, private price:number) {
        super(10, "alcohol drink");
        this.name = name;
        this.price - price;
    }
    getInfo() {
        let parentInfo = super.getInfo();
        return (parentInfo + `, name: ${this.name}, price: ${this.price}`)
    }

    get className() {
        return "alcohol";
    }
}