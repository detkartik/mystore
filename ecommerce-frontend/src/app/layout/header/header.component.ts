import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: firebase.User
  constructor(
  private apiService:ApiService,
  private auth: AngularFireAuth
  ) { 
    auth.authState.subscribe(user=>this.user=user)
  }
  logout() {
    this.auth.signOut()
  }

  ngOnInit(): void {
  }

}
