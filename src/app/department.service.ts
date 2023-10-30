import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseURL= "http://localhost:8080/api/v1/departments/";

  //injected HttpClient in constructor
  constructor(private httpClient: HttpClient) { }
  
  //Angular makes use of observables as an interface to handle 
  //a variety of common asynchronous operations like The HTTP module uses observables to handle AJAX requests and responses
  getDepartmentList() : Observable<Department[]>
  {
    // get method request that interprets the body as JSON and returns the 
    //response body in a given type , here it is Employee list
    //get method return — An Observable of the HttpResponse, with a response body in the requested type.
    return this.httpClient.get<Department[]>(`${this.baseURL}`)
  }
  createDepartment(department:Department):Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`,department);
  }

  getDepartmentById(id :number) : Observable<Department>{
    return this.httpClient.get<Department>(`${this.baseURL}/${id}`);
  }
  updateDepartment(id: number,department : Department) : Observable <Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,department);
  }

  deleteDepartment(id: number) : Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
