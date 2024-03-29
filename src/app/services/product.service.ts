import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products! : Array<Product>;

  constructor() {
   this.products = [
      {id : 1, name : "Computer", price : 6500},
      {id : 2, name : "Printer", price : 1200},
      {id : 3, name : "Smart phone", price : 1400},
    ];
  }

  public getAllProducts(){
    return this.products
  }

  public deleteProduct(id : number){
    

  }
}
