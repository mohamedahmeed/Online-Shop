import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/Service/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts:any
  products:any;
  productid:any;
  count:any;
  constructor(public cardServices:CartService,public myActivated:ActivatedRoute,private router:Router) {
  //this.productid=this.myActivated.snapshot.params[`id`];

   }
  Delete(item:any){
    this.productid=item.orderId;
    let result=window.confirm('Are You Sure');
    if(result){
      this.cardServices.delete(this.productid).subscribe((responce)=>{ 
        window.location.href="/cart";}) 
      }    
  }

  ngOnInit(): void {
    this.cardServices.getAll().subscribe(
      (res)=>{this.carts=res;
        this.count=this.carts.length;
      },
      (err)=>{console.log(err)}
    )
    if(this.productid!=undefined)
    {
      this.cardServices.delete(this.productid).subscribe(
      (response)=>{
        this.products=response;
        this.router.navigate(["/cart"]);
      },
      (error)=>{
        console.log(error);

        }
    )
    }
    
  }
}