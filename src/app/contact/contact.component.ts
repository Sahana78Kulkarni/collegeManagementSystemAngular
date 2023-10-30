import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData:any;
  contact:Contact=new Contact();
  constructor( private fb: FormBuilder,private contactService:ContactService, private router: Router){

  }
  ngOnInit(): void {
      this.formData= this.fb.group({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phoneNo:new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]),
      subject:new FormControl('',[Validators.required]),
      message:new FormControl('',[Validators.required]),
    })
   }
    saveContact()
    {
      this.contactService.createContact(this.contact).subscribe(data=>
      {
        console.log(data);
       
      },
      (      error: any) => console.log(error));
    
    }  
    onClickSubmit()
    {
      console.log("contact obj: "+this.contact);
      this.saveContact();
      alert("Contact saved ....");
      this.router.navigate(['/home']);
    }
    resetForm(){
      this.contact=new Contact();
    }
    get name(){
      //console.log(this.formData.get('name'));
      return this.formData.get('name');
    }
    get email(){
      return this.formData.get('email');
    }
    get phoneNo(){
      return this.formData.get('phoneNo');
    }
    get subject(){
      return this.formData.get('subject');
    }
    get message(){
      return this.formData.get('message');
    }
}
