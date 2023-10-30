import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DepartmentComponent } from './department/department.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { UpdateFacultyComponent } from './update-faculty/update-faculty.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { CreateFacultyComponent } from './create-faculty/create-faculty.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { NotloggedinComponent } from './notloggedin/notloggedin.component';
import { CreateDeptComponent } from './create-dept/create-dept.component';
import { UpdateDeptComponent } from './update-dept/update-dept.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path:'faculty-list',component:FacultyListComponent},
  { path:'department',component:DepartmentComponent},
  {path : 'update-faculty/:id' , component : UpdateFacultyComponent},
  {path : 'faculty-details/:id', component : FacultyDetailsComponent},
  {path : 'admin/create-faculty' ,component : CreateFacultyComponent},
  
  {path : 'admin/create-dept' ,component : CreateDeptComponent},
  {path : 'update-dept/:id' , component : UpdateDeptComponent},

  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'notloggedin',component:NotloggedinComponent},
  {path:'admin',component:AdminComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
