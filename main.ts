
import {ContentGenerator} from "./content-generator";
import {Fruits} from "./food-fruits";
import {Vegetables} from "./food-vegetables";
import {Alcohol} from "./drinks-alcohol";
import {Nonalcohol} from "./drinks-nonalcohol";

window.addEventListener ("load", init, false);

function init () {

let listWrapper = document.getElementById("product-list");

let products:any[] = [];


let apple = new Fruits ("apple", "red", 15);
products.push(apple);
let banana = new Fruits ("banana", "yellow", 30);
products.push(banana);
let orange = new Fruits ("orange", "orange", 45);
products.push(orange);

let tomato = new Vegetables ("tomato", "rose", 35);
products.push(tomato);
let cucumber = new Vegetables ("cucumber", "green", 25);
products.push(cucumber);
let onions = new Vegetables ("onions", "white", 17);
products.push(onions);

let beer = new Alcohol ("beer", 25);
products.push(beer);
let cognac = new Alcohol ('cognac', 100);
products.push(cognac);
let liquor = new Alcohol ('liquor', 120);
products.push(liquor);

let juice = new Nonalcohol ("juice", 22);
products.push(juice);
let water = new Nonalcohol ("water", 10);
products.push(water);
let soda = new Nonalcohol ("soda", 20);
products.push(soda);

ContentGenerator.generateHTML(listWrapper,products);

}




