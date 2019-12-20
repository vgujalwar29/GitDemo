import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeDetails } from 'app/model/EmployeeDetails.model';
@Injectable({
  providedIn: 'root'
})
export class SharedadminServiceService {

  
  constructor(private _http:HttpClient) { }
  url:string='http://localhost:8081/admin';


  getEmpData()
  {
    return this._http.get<EmployeeDetails[]>(this.url+'/getemp');
  }
}
