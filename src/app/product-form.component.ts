import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder} from '@angular/forms'
import { ProductService } from './product.service'

@Component({
  selector: 'productForm',
  templateUrl: 'product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService){}

  ngOnInit() {
    this.form = new FormGroup({
      name: this.formBuilder.control(null),
      description: this.formBuilder.control(null),
      price: this.formBuilder.control(null)
    });
  }
  onSubmit(product) {
    console.log(product);
    this.productService.add(product)
  }

   onProductDelete(product) {
    this.productService.delete(product);
  }
};