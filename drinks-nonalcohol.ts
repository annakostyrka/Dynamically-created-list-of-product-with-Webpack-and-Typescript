import {Drinks} from "./drinks";
export class Nonalcohol extends Drinks {
    constructor (private name:string,private price:number) {
        super(20, "nonalcohol drink");
        this.name = name;
        this.price - price;
    }
    getInfo() {
        let parentInfo = super.getInfo();
        return (parentInfo + `, name: ${this.name}, price: ${this.price}`)
    }

    get className() {
        return "nonalcohol";
    }

}