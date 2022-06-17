import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ImageService } from 'src/Service/image.service';
import { ProductsService } from 'src/Service/products.service';
import { UserService } from 'src/Service/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotterComponent } from './fotter/fotter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { CartComponent } from './products/cart/cart.component';
import { ProductComponent } from './products/product/product.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { UploadimageComponent } from './products/uploadimage/uploadimage.component';

import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    FotterComponent,
    NavbarComponent,
    CartComponent,
    UploadimageComponent,
    LoginComponent,
    RegisterComponent,
    AddproductComponent,
    ProductComponent,
    ProductdetailsComponent,
    SlideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    ImageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
