import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  loginUser:any = []
  constructor(
    private apiService:ApiService,
    private toastr:ToastrService,
    private auth: AngularFireAuth,
  ) { 

  }
  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  
  ngOnInit(){
    this.apiService.getUser().subscribe(
      data => {
        this.loginUser = data;
      },
      err => {
        this.toastr.error(err.status,"Oops")
  });
}
}
