import { Component, OnInit } from '@angular/core'
import { ProductService } from './product.service'

@Component({
  selector: 'prod-list',
  templateUrl: 'prod-list.component.html',
  styleUrls: ['prod-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;

  constructor(private productService: ProductService ) {}

  ngOnInit(){
    this.products = this.productService.get();
  }

  
  onProductDelete(product){
    this.productService.delete(product);
  }

};