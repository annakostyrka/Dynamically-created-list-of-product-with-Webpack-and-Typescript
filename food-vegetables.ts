import {Food} from "./food";
export class Vegetables extends Food {
    constructor (private name:string, private color:string,private price:number) {
        super(25, "vegetables");
        this.name = name;
        this.color = color;
        this.price - price;
    }
    getInfo() {
        let parentInfo = super.getInfo();
        return (parentInfo + `, name: ${this.name}, color: ${this.color}, price: ${this.price}`)
    }

    get className() {
        return "vegetables";
    }
}