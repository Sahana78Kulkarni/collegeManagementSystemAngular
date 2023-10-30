import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { FacultyService } from '../faculty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-faculty',
  templateUrl: './update-faculty.component.html',
  styleUrls: ['./update-faculty.component.css']
})
export class UpdateFacultyComponent implements OnInit{
  updateForm!: FormGroup;
  id!: number;
  faculty: Faculty =new Faculty();
 
  constructor(private fb: FormBuilder,private facultyService:FacultyService,
    private route: ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      designation:['', Validators.required],
      qualification:['', Validators.required],
      exp:['', Validators.required],
      dept_code:['', Validators.required]
     });
    
//Angular Router provides methods to get route parameters:Using the route snapshot
//retrieve the value of the parameter using the route snapshot.
    this.id = this.route.snapshot.params['id'];
    this.facultyService.getFacultyById(this.id).subscribe(data=> {
       
       this.faculty = data;
       console.log(this.faculty);
     },
     error =>console.log(error));
    }
     
    onSubmit()
    {
      this.facultyService.updateFaculty(this.faculty).subscribe(data=>{
        this.gotoFaculityList();
      },
      error =>console.log(error));
      console.log("updated in component");
    }
 
    gotoFaculityList()
    {
    this.router.navigate(['/admin']);
    }   
    cancel(){
      this.router.navigate(['/admin']);
    }
    get name(){
      return this.updateForm.get('name');
    }
    get designation(){
      return this.updateForm.get('designation');
    }
    get qualification(){
      return this.updateForm.get('qualification');
    }
    get exp(){
      return this.updateForm.get('exp');
    }
    get dept_code(){
      return this.updateForm.get('dept_code');
    }
}
