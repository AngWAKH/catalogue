import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products! : Array<Product>;

  constructor(private productService : ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();

  }

  handleDeleteProduct(p: any) {

  }
}
