import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faculty } from './faculty';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private baseURL= "http://localhost:8080/api/v1/faculties";

  //injected HttpClient in constructor
  constructor(private httpClient: HttpClient) { }
  
  //Angular makes use of observables as an interface to handle 
  //a variety of common asynchronous operations like The HTTP module uses observables to handle AJAX requests and responses
  getFacultyList() : Observable<Faculty[]>
  {
    // get method request that interprets the body as JSON and returns the 
    //response body in a given type , here it is Employee list
    //get method return — An Observable of the HttpResponse, with a response body in the requested type.
    return this.httpClient.get<Faculty[]>(`${this.baseURL}`)
  }
  createFaculty(faculty:Faculty):Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`,faculty);
  }

  getFacultyById(id :number) : Observable<Faculty>{
    return this.httpClient.get<Faculty>(`${this.baseURL}/${id}`);
  }
  updateFaculty(faculty : Faculty) : Observable <Object>
  {
    console.log("updated in service");
    return this.httpClient.put(`${this.baseURL}`,faculty);  
  }

  deleteFaculty(id: number) : Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
