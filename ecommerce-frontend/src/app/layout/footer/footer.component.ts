import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
  }

}
