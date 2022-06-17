import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/Product';
import { ProductOrder } from 'src/app/ViewModel/ProductOrder.VM';
import { CartService } from 'src/Service/cart.service';
import { ImageService } from 'src/Service/image.service';
import { ProductsService } from 'src/Service/products.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private p:ProductsService,private a:ActivatedRoute,private r:Router,private i:ImageService,private c:CartService) { }
pid:any;
totalStock:number=1;
product:product=new product();
ii:any;
productorder:ProductOrder=new  ProductOrder();
  ngOnInit(): void {
    this.a.paramMap.subscribe((params)=>{
this.pid=params.get('id');
this.p.getProductById(this.pid).subscribe((responce)=>{
this.product=responce;
this.i.getImageByProductId(this.pid).subscribe((responce)=>{
  this.ii=responce;
  console.log(responce);
  console.log(this.ii);
})
})
    })
  }
  addimage(){
    
    this.r.navigate(['/upload',this.pid])
  }
  addtocart(){
    this.productorder.ProductID=this.product.id;
    this.productorder.TotalPrice=this.product.productPrice;
    this.productorder.Color="";
    this.productorder.Size=" ";
    this.productorder.UserId=" ";
    this.productorder.TotalStock=this.totalStock;
    this.productorder.orderId=0;
    this.c.addProductToCart(this.productorder).subscribe((Response)=>{
      window.location.href="/cart";
    
    })
  }
}
