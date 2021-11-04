import {ProductTemplate} from "./product-template";

export abstract class Product implements ProductTemplate {
    private ProductType:string;

    constructor (ProductType:string) {
        this.ProductType = ProductType;
    }
    getInfo():string {
        return (`Product type: ${this.ProductType}`);
    }

    get className() {
        return "product";
    }
}