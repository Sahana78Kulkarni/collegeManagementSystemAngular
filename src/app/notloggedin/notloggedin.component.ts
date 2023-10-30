import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notloggedin',
  templateUrl: './notloggedin.component.html',
  styleUrls: ['./notloggedin.component.css']
})
export class NotloggedinComponent {
  constructor(private router: Router){
    
  }
  onClick(){
    this.router.navigate(['/login']);
  }
}
