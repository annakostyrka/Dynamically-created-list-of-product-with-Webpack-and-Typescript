import {Product} from "./product";

export abstract class Drinks extends Product {
    constructor (private volume:number, private category:string){
        super("drink");
    }
    getInfo() {
        let parentInfo = super.getInfo();
        return (parentInfo + `, product category: ${this.category}, volume: ${this.volume}`);
    }
    
}