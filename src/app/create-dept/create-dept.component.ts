import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-create-dept',
  templateUrl: './create-dept.component.html',
  styleUrls: ['./create-dept.component.css']
})
export class CreateDeptComponent {
  deptForm!: FormGroup;
  dept:Department = new Department();

  constructor(  private fb: FormBuilder,private deptService:DepartmentService,
    private router: Router){}

  ngOnInit(): void {
   this.deptForm = this.fb.group({
    id:['', Validators.required],
    name: ['', Validators.required],    
    code:['', Validators.required]
   });
  }
  onSubmit()
  {
    console.log(this.dept);
    this.saveDepartment();
  }
  saveDepartment() {
    this.deptService.createDepartment(this.dept).subscribe(data=>
      {
        console.log(data);
        alert("Department created....");
        this.gotoDeptList();
      },
      error => console.log(error));
  }
  gotoDeptList() {
    this.router.navigate(['/admin']);
  }
  resetForm(){
    this.dept=new Department();
  }
  get id(){
    return this.deptForm.get('id');
  }
  get name(){
    return this.deptForm.get('name');
  }
  get code(){
    return this.deptForm.get('code');
  }
  
}
