import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path:"products", component:ProductsComponent},
  {path:"editproduct", component:EditProductComponent},
  {path:"", redirectTo:"/products", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
