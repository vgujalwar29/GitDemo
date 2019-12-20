import { Component, OnInit } from '@angular/core';
import { SharedadminServiceService } from 'app/shared/sharedadmin-service.service';
import { EmployeeDetails } from 'app/model/EmployeeDetails.model';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.scss']
})
export class EmployeeinfoComponent implements OnInit {

  constructor(private sharedadmin:SharedadminServiceService) { }
  showempDiv:boolean=false;
  Employee= new EmployeeDetails();
  emparray:EmployeeDetails[];
  ngOnInit() {
  }

  showEmployee()
  {
    this.showempDiv=true;
    return this.sharedadmin.getEmpData().subscribe(result=>{this.emparray=result });
   
  }

}
