import {setPriceList, getPrice} from "./price-list.js";
//debugger;

const examplePriceList = [   
  {
    itemid: 1, 
    itemname: "bottle", 
    prices: [{ qty: 1, price: 1.25},{ qty: 100, price: 1.10},{ qty: 1000, price: 1.00}]
  },
  {
    itemid: 2, 
    itemname: "glass", 
    prices: [{ qty: 1, price: 2.50},{ qty: 50, price: 2.00},{ qty: 200, price: 1.60}]
  },
  {
    itemid: 3,
    itemname: "pint",
    prices: [{qty: 1, price: 3.00},{qty: 10, price: 2.50},{qty: 15, price: 2.00}]
  }
];


setPriceList(examplePriceList);

console.log(getPrice(2, 130)); //260
console.log(getPrice(1, 1));
console.log(getPrice(3, 15));    
