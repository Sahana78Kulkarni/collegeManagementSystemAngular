import { Component } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { Router } from '@angular/router';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  faculties!: Faculty[];
  
  constructor(private facultyService: FacultyService,private router:Router)
  {}
  ngOnInit(): void {
    this.getFaculties();
  }
  private getFaculties()
  {
    //using subscribe method we handle the responsedata
    this.facultyService.getFacultyList().subscribe(data=>{
      this.faculties = data;         
    })
  }
  updateFaculty(id : number)
  {
  this.router.navigate(['update-faculty',id]);
  }

  deleteFaculty(id: number)
  {
    this.facultyService.deleteFaculty(id).subscribe(data=>
      {
      console.log(data);
      this.getFaculties();
  })
  }
  facultyDetails(id: number)
  {
    this.router.navigate(['faculty-details',id]);
  }

  logout(){
    this.router.navigate(['logout']);
  }
}
