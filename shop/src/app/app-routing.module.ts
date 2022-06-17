import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { CartComponent } from './products/cart/cart.component';
import { ProductComponent } from './products/product/product.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';

import { UploadimageComponent } from './products/uploadimage/uploadimage.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  
  {path:'upload/:id',component:UploadimageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'home',component:ProductComponent},
  {path:'details/:id',component:ProductdetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
