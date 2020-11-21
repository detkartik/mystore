import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css']
})
export class OrderPlacementComponent implements OnInit {
  order:any = [];
  constructor(
    private apiService:ApiService,
    private toastr:ToastrService
  ) { }

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
