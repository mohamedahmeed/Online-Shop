import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/Service/image.service';
import { ProductsService } from 'src/Service/products.service';


@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
})
export class UploadimageComponent implements OnInit {

Name:string="";
productid:any;
Images:any;
Products:any;

  constructor(public myService:ProductsService,public myimage:ImageService,public myActivated:ActivatedRoute) {
  this.productid=this.myActivated.snapshot.params[`id`];

   }
   AddProduct(){
           var product:{ImageName:string,ProductId:number}={
      ImageName:this.Name,
      ProductId:this.productid,
    }
    product.ImageName=this.Name.replace(/^.*[\\\/]/, '');

      this.myimage.addImage(product).subscribe(
      (response)=>{
        this.Images=response;
        console.log(this.Images);
      },
      (error)=>{
        console.log(error);

        }
    )
   }

  ngOnInit(): void {
    this.myService.getProductById(this.productid,).subscribe(
      (response)=>{
        this.Products=response;
        console.log(this.Products);
      },
      (error)=>{
        console.log(error);

        }
    )
  }

}
