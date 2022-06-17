import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:5031/api/product';
  getAllProduct(){
return this.http.get(this.url);
  }
  getProductById(id:number){
    return this.http.get<product>(`${this.url}/${id}`);
  }
  Deleteproduct(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  addProduct(p:product){
   
return this.http.post(`${this.url}`,p)

  }
  UpdateProduct(p:product,id:number){
    return this.http.put(`${this.url}/${id}`,p)
      }
}
