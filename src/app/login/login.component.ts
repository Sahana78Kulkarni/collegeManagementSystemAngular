import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  formdata!: FormGroup;

  constructor(private service: RecordService, private router: Router) { }
    ngOnInit(): void {
      this.formdata = new FormGroup({
        username: new FormControl('sahana'),
        password: new FormControl('password'),
      });
    }

    onclicksubmit(data: any) {
      this.username = data.username;
      this.password = data.password;

      let responce = this.service.login(this.username, this.password);
      if (responce == true) {
        alert("logged in...");
      this.router.navigate(['/admin']);
      }
      else {
        alert("not logged in...");
        this.router.navigate(['/notloggedin']);
      }
    }

    cancel(){
      this.router.navigate(['/home']);
    }
}
  /*doLogin() {
    alert(this.username+" "+this.password);
    let resp=this.service.login(this.username,this.password);
    resp.subscribe(data=>{
      console.log(data)
      this.message=data;
      this.router.navigate(['/admin'])
    });
   
  }*/

 

 
