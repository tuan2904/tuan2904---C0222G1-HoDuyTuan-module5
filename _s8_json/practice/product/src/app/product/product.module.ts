import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {DeleteComponent} from './delete/delete.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    EditProductComponent,
    DeleteComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule {
}
