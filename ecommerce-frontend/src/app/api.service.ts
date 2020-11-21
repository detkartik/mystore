import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/';
  headers = new HttpHeaders(
    {
      'Content-Type':'application/json',
      Authorization: 'Token 80dd1b29033ffa4747d1d7561c818b47df41fd99'
    }
  );

  constructor(
    private httpClient: HttpClient
  ) { }
  getProduct(){
    return this.httpClient.get(this.baseUrl+'product',{headers:this.headers}); 
  }
  getCategory(){
    return this.httpClient.get(this.baseUrl+'category',{headers:this.headers});
  }
  getOrders(){
    return this.httpClient.get(this.baseUrl+'order',{headers:this.headers});
  }
  getPayment(){
    return this.httpClient.get(this.baseUrl+'payment',{headers:this.headers});
  }
  getUser(){
    return this.httpClient.get(this.baseUrl+'user',{headers:this.headers}); 
  }
}

