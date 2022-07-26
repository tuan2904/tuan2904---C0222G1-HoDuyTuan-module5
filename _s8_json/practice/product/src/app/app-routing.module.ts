import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {DeleteComponent} from './product/delete/delete.component';


const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent
},
  {
    path: 'product/delete/:id',
    component: DeleteComponent
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
