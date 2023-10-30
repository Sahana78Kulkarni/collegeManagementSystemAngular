import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  constructor(private http:HttpClient) { }
//  private baseURL= "http://localhost:8080/api/v1/login";
 isuserloggedin:any;
  
   login(username:string,password:string)
    {

      this.isuserloggedin = (username == 'sahana' &&  password == 'password' );
      
      localStorage.setItem("isuserloggedin",this.isuserloggedin ? "true" : "false" );
      
      return (this.isuserloggedin);
    }

   /* public login(username:string,password:string){
      const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
      return this.http.get(this.baseURL,{headers,responseType:'text' as 'json'});
    }*/
}
