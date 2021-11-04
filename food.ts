import {Product} from "./product";

export abstract class Food extends Product {
    constructor (private weight:number, private category:string){
        super("food");
    }
    getInfo() {
        let parentInfo = super.getInfo();
        return (parentInfo + `, product category: ${this.category}, weight: ${this.weight}`);
    }

}