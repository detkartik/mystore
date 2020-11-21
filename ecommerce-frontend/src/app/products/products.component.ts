import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any = [];
  constructor(
    private apiService:ApiService,
    private toastr:ToastrService
  ) { }

  ngOnInit(){
    this.apiService.getProduct().subscribe(
      data => {
        this.products = data;
      },
      err => {
        this.toastr.error(err.status,"Oops")
      });
    
  }
  

}
