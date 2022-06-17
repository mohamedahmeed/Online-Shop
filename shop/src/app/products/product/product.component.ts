import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/Product';
import { ProductOrder } from 'src/app/ViewModel/ProductOrder.VM';
import { CartService } from 'src/Service/cart.service';
import { ProductsService } from 'src/Service/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
pid:any;
  constructor(private p:ProductsService,private a:ActivatedRoute,private r:Router,private c:CartService) { }
  Details(p:any){
    this.pid=p.id;
this.r.navigate(['/details',this.pid]);
  }
  iddelete:any;
  Delete(pp:any){
    let result=window.confirm('Are You Sure');
    this.iddelete=pp.id;
    if(result){
      this.p.Deleteproduct(this.iddelete).subscribe((responce)=>{this.ngOnInit();})  
    }
  }

  ngOnInit(): void {
    this.p.getAllProduct().subscribe((responce)=>{
    this.Product=responce;
    },
    (error)=>{
    console.log(error);
    });
      }
productorder:ProductOrder=new  ProductOrder();
prod:product=new product();

TotalStock:number=1;
  addtocart(p:any){
    
    this.pid=p.id;
   this.r.navigate(['/cart']);
  }
  addtocard(){
    this.productorder.ProductID=this.prod.id;
    this.productorder.TotalPrice=this.prod.productPrice;
    this.productorder.Color="";
    this.productorder.Size=" ";
    this.productorder.UserId=" ";
    this.productorder.TotalStock=this.TotalStock;
    this.productorder.orderId=0;
    this.c.addProductToCart(this.productorder).subscribe((Response)=>{
    })
  }
Product:any;
 

}
