import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculty } from '../faculty';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-faculty',
  templateUrl: './create-faculty.component.html',
  styleUrls: ['./create-faculty.component.css']
})
export class CreateFacultyComponent implements OnInit {
  facultyForm!: FormGroup;
  faculty: Faculty = new Faculty();

  constructor(  private fb: FormBuilder,private facultyService:FacultyService,
    private router: Router){}

  ngOnInit(): void {
   this.facultyForm = this.fb.group({
    name: ['', Validators.required],
    designation:['', Validators.required],
    qualification:['', Validators.required],
    exp:['', Validators.required],
    dept_code:['', Validators.required]
   });
  }
  saveFaculty()
  {
    this.facultyService.createFaculty(this.faculty).subscribe(data=>
      {
        console.log(data);
        alert("Faculty created....");
        this.gotoFacultyList();
      },
      error => console.log(error));
    
  }
  gotoFacultyList()
  {
    this.router.navigate(['/admin']);
  }
  onSubmit()
  {
    console.log(this.faculty);
    this.saveFaculty();
  }
  resetForm(){
    this.faculty=new Faculty();
  }
  get name(){
    return this.facultyForm.get('name');
  }
  get designation(){
    return this.facultyForm.get('designation');
  }
  get qualification(){
    return this.facultyForm.get('qualification');
  }
  get exp(){
    return this.facultyForm.get('exp');
  }
  get dept_code(){
    return this.facultyForm.get('dept_code');
  }
}
