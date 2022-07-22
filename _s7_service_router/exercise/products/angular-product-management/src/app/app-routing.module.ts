import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {DeleteComponent} from "./delete/delete.component";


const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent
},
  {
    path: 'product/edit/:id',
    component: EditProductComponent
  },
  {
    path: 'product/delete/:id',
    component: DeleteComponent
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
