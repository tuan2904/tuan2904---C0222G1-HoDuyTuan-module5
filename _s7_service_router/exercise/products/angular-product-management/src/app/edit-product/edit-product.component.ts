import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  products:Product
  editForm: FormGroup
  constructor(
    private activatedRoute:ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const  id= Number(this.activatedRoute.snapshot.params.id)
    this.products=this.productService.editProduct(id);
   this.editForm = new FormGroup({
      id: new FormControl(this.products.id),
      name: new FormControl(this.products.name),
      price: new FormControl(this.products.price),
      description: new FormControl(this.products.description),
    });
  }

  submits() {
    const product = this.editForm.value;
    this.productService.updateProduct(product);
  }
}
