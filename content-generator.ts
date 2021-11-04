import {ProductTemplate} from "./product-template";

export class ContentGenerator {
    public static generateHTML (div:HTMLElement, products:ProductTemplate[]) {
        let list = document.createElement("ul");
        div.append(list);
        for(let i= 0; i<products.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerText += products[i].getInfo();
            listItem.setAttribute("class", products[i].className);
            list.append(listItem);
        }
    }
    
}


