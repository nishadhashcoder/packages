import { Component, Input, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AgGridAngular } from 'ag-grid-angular';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'generic-component';
  apiData:any = [];
  columns: any = ['name', 'email', 'phone'];

  constructor(private api:ApiService) {
    api.getApiData().subscribe(res=>{
      this.apiData = res;
      console.log(this.apiData)
      
    });
  }
   
}
