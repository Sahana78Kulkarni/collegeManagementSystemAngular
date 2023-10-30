import { Component } from '@angular/core';
import { Faculty } from '../faculty';
import { Router } from '@angular/router';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent
 {
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
}
