import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseURL= "http://localhost:8080/api/v1/contact";

  //injected HttpClient in constructor
  constructor(private httpClient: HttpClient) { }
  
  //Angular makes use of observables as an interface to handle 
  //a variety of common asynchronous operations like The HTTP module uses observables to handle AJAX requests and responses
  getContactList() : Observable<Contact[]>
  {
    // get method request that interprets the body as JSON and returns the 
    //response body in a given type , here it is Employee list
    //get method return — An Observable of the HttpResponse, with a response body in the requested type.
    return this.httpClient.get<Contact[]>(`${this.baseURL}`)
  }
  createContact(contact:Contact):Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`,contact);
    console.log("contact saved......");
  }

 /* getContactById(id :number) : Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseURL}/${id}`);
  }
  updateContact(id: number,contact : Contact) : Observable <Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,contact);
  }

  deleteContact(id: number) : Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }*/
}
