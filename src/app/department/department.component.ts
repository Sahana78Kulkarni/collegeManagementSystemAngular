import { Component } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  departments!: Department[];
  
  constructor(private departmentService: DepartmentService,private router:Router)
  {}
  ngOnInit(): void {
    this.getDepartments();
  }
  private getDepartments()
  {
    //using subscribe method we handle the responsedata
    this.departmentService.getDepartmentList().subscribe(data=>{
      this.departments = data;         
    })
  }
  updateDepartment(id : number)
  {
  this.router.navigate(['update-dept',id]);
  }

  deleteDepartment(id: number)
  {
    this.departmentService.deleteDepartment(id).subscribe(data=>
      {
      console.log(data);
      this.getDepartments();
  })
  }
  departmentDetails(id: number)
  {
    this.router.navigate(['department-details',id]);
  }
}
