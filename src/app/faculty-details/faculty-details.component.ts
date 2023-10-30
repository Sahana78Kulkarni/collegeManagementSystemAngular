import { Component } from '@angular/core';
import { Faculty } from '../faculty';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent {
  id!: number;
  faculty!: Faculty;
  constructor(private route: ActivatedRoute ,private facultyService: FacultyService,private router : Router)
    {}
  
  ngOnInit(): void {
  //retrieve the value of the parameter using the route snapshot.
    this.id=this.route.snapshot.params['id'];
    this.facultyService.getFacultyById(this.id).subscribe(data=>
      {
        this.faculty= data;
      })
  }
  backToAdminPage(){
    this.router.navigate(['/admin']);
  }
}
