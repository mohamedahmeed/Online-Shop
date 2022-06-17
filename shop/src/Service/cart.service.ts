import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductOrder } from 'src/app/ViewModel/ProductOrder.VM';
@Injectable({
  providedIn: 'root',
})
export class CartService {
        baseUrl="http://localhost:5031/api";
  constructor(public _client: HttpClient) {}
  getAll() {
    return this._client.get(`${this.baseUrl}/ProductOrder`);
  }

    getAllOrderNumber() {
    return this._client.get(`${this.baseUrl}/ProductOrder`);
  }
    addProductToCart(Product:ProductOrder){
    return this._client.post(`${this.baseUrl}/ProductOrder`,Product);
    
  }
      delete(ID:any){
    return this._client.delete(`${this.baseUrl}/ProductOrder/${ID}`);
    
  }
}
