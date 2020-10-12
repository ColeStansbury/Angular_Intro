import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products = [
    {
      name : "Backpack",
      description: "Carry stuff",
      price: 99.99
    },
    {
      name: "Shoes",
      description: "For your feet",
      price: 60.00 
    }
  ];

  get(){
    return this.products;
  }

  add(product){
    this.products.push(product);
  }

  delete(product){
    const index = this.products.indexOf(product);
    if(index >= 0){
      this.products.splice(index,1);
    }
  }

}