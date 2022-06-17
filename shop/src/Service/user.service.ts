import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: [] = [];
  baseUrl = 'http://localhost:5031/api'
  constructor(public myClient: HttpClient) { }



  getAllUsers() {
    return this.myClient.get<any>(`${this.baseUrl}/user`)
  }



  getUserById(userId: any) {
    return this.myClient.get(`${this.baseUrl}User${userId}`)
  }



  addUser(user: { username: string; address: string; email: string; password: string }) {
    return this.myClient.post(`${this.baseUrl}/User`, user)
  }



  deleteUser(userId: any) {
    return this.myClient.delete(`${this.baseUrl}/User${userId}`)
  }


  editUser(userId: any, user: { username: string; address: string; email: string; password: string }) {
    return this.myClient.put(`${this.baseUrl}/user${userId}`, user)
  }


}




