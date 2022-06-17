 import { Component, OnInit } from '@angular/core';
 import { FormControl, FormGroup, Validators } from '@angular/forms';
import { product } from 'src/app/Product';
 import { ProductsService } from 'src/Service/products.service';
 @Component({
   selector: 'app-addproduct',
   templateUrl: './addproduct.component.html',
   styleUrls: ['./addproduct.component.css']
 })
 export class AddproductComponent implements OnInit {
   constructor(private b:ProductsService) { }
   imgName:any;
   fileupload(event:any){
     this.imgName=event.target.files[0].name;
     console.log(this.imgName);
      }
  p=new FormGroup({
  productName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    productDescription:new FormControl('',[Validators.required,Validators.minLength(3)]),
    productPrice:new FormControl('',[Validators.required,Validators.min(30)]),
   discount:new FormControl('',[Validators.required,Validators.max(50)]),
    image:new FormControl(``,[Validators.required]),
  })
  get ProductNameerror(){
   return this.p.controls['productName'];
  }
  get ProductDescriptionerror(){
   return this.p.controls['productDescription'];
  }
  get ProductPriceerror(){
   return this.p.controls['productPrice'];
  }
  get discounterror(){
   return this.p.controls['discount'];
  }
  get imageerror(){
   return this.p.controls['image'];
  }
  flag:boolean=false;
  image:string="";
  productName:string="";
  productDescription:string="";
  productPrice:number=0;
  discount:number=0;
  id:number=0;
  add(){
  var pp:product={
    productName: this.productName,
    id: this.id,
    productPrice: this.productPrice,
    discount:this.discount,
    image:this.image,
    productDescription:this.productDescription,
  }
    pp.image=this.image.replace(/^.*[\\\/]/, '');
    this.b.addProduct(pp).subscribe((responce)=>{
      console.log(pp);
      console.log(responce);

      this.flag=true;
    })
  }
   ngOnInit(): void {
   }

 }
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { product } from 'src/app/Product';
// import { ProductsService } from 'src/Service/products.service';



// @Component({
//   selector: 'app-addproduct',
//   templateUrl: './addproduct.component.html',
//   styleUrls: ['./addproduct.component.css']
// })


// export class AddproductComponent implements OnInit {
//   ngOnInit(): void {}
//   productName:string="";
//   productDescription:string="";
//   productPrice:number=0;
// image:string="";
// id:number=0;
// Products:any;
// discount:number=0;
//   constructor(private p:ProductsService,private r:Router,private a:ActivatedRoute) {}
//     pro=new FormGroup({
//       productName:new FormControl('',[Validators.required,Validators.minLength(3)]),
//           productDescription:new FormControl('',[Validators.required,Validators.minLength(3)]),
//           productPrice:new FormControl('',[Validators.required,Validators.min(30)]),
//          discount:new FormControl('',[Validators.required,Validators.max(50)]),
//           image:new FormControl(``,[Validators.required]),
//     });
//     get ProductNameerror(){
//          return this.pro.controls['productName'];
//        }
//         get ProductDescriptionerror(){
//         return this.pro.controls['productDescription'];
//         }
//         get ProductPriceerror(){
//          return this.pro.controls['ProductPrice'];
//         }
//         get discounterror(){
//          return this.pro.controls['discount'];
//         }
//         get imageerror(){
//          return this.pro.controls['image'];
//         }

//   flag:boolean=false;
//   onSubmit(){
    
//     var productt:product={
//       id:this.id,
//       productName:this.productName,
//       productDescription:this.productDescription,
//       productPrice:this.productPrice,
//       discount:this.discount,
//       image:this.image,
//     }
//     // let index= productt.image.lastIndexOf('h');
//     // productt.image=this.image.substring(index+2,);
//     productt.image=this.image.replace(/^.*[\\\/]/, '');
 
//       this.p.addProduct(productt).subscribe(
//       (response)=>{
//         this.Products=response;
//         console.log(productt);
        
//         console.log(this.Products);
//         this.flag=true;
//       },
//       (error)=>{
//         console.log(error);
 
//         }
//     )

//    } 
    
// }

