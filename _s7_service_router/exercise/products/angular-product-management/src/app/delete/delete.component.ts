import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  products:Product
  delete: FormGroup
  private router: any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const  id= Number(this.activatedRoute.snapshot.params.id)
    this.products=this.productService.editProduct(id);
    this.delete = new FormGroup({
      id: new FormControl(this.products.id),
      name: new FormControl(this.products.name),
      price: new FormControl(this.products.price),
      description: new FormControl(this.products.description),
    });
  }
  getProduct(id: number) {
    return this.productService.editProduct(id);
  }
  submits(id:number) {
    this.productService.deleteProduct(id)
    this.router.navigate(['/product/list']);
  }
}
