import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  order:any = [];
  constructor( private apiService:ApiService,
    private toastr:ToastrService) {
   }

  ngOnInit(){
    this.apiService.getOrders().subscribe(
      data => {
        this.order = data;
      },
      err => {
        this.toastr.error(err.status,"Oops")
      });
    
  }
  

}
