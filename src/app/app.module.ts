import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DepartmentComponent } from './department/department.component';
import { FacultyService } from './faculty.service';
import { ContactService } from './contact.service';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateFacultyComponent } from './update-faculty/update-faculty.component';
import { CreateFacultyComponent } from './create-faculty/create-faculty.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { RecordService } from './record.service';
import { LogoutComponent } from './logout/logout.component';
import { NotloggedinComponent } from './notloggedin/notloggedin.component';
import { FooterComponent } from './footer/footer.component';
import { CreateDeptComponent } from './create-dept/create-dept.component';
import { UpdateDeptComponent } from './update-dept/update-dept.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    DepartmentComponent,    
    FacultyListComponent, 
    UpdateFacultyComponent,
     CreateFacultyComponent,
      FacultyDetailsComponent,
      LoginComponent,
      AdminComponent,
      LogoutComponent,
      NotloggedinComponent,
      FooterComponent,
      CreateDeptComponent,
      UpdateDeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [FacultyService,ContactService,RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
