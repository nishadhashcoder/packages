import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-list-generic',
  templateUrl: './list-generic.component.html',
  styleUrls: ['./list-generic.component.css']
})
export class ListGenericComponent implements OnInit {

  @Input() rowData:any =[];
  @Input() colData:any =[];
  title = 'generic-component';
  apiData:any = [];
  gridApi:any;
  gridColumnApi: any;
  columnDefs: any = [];
  


  



onGridReady(params: any){
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  //this.columnDefs = this.gridApi.getColumnDefs();
  params.api.sizeColumnsToFit();
  console.log(this.columnDefs)


  
}





  ngOnInit(): void {
    this.colData.forEach((element: any) => {
      this.columnDefs.push({
        field: element, 
        sortable: true, 
        filter: true
      })
    });
  }

}
