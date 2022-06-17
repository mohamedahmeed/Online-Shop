import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

      baseUrl="http://localhost:5031/api";

  constructor(public myimage:HttpClient) { }
  getAllProducts(){
    return this.myimage.get(`${this.baseUrl}/image`);
  }
    getImageById(ProductID:any){
    return this.myimage.get(`${this.baseUrl}/image/${ProductID}`);
  }
  getImageByProductId(id:any){
    return this.myimage.get(`${this.baseUrl}/image/getimage/${id}`)
  }
  addImage(image:{ImageName:string;ProductId:number}){
    return this.myimage.post(`${this.baseUrl}/image`,image)
   }

}
