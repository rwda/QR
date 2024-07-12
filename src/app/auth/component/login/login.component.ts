import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
     private fb:FormBuilder,
     private service:LoginService,
    // private toaster :ToastrService ,
     private router:Router
  ) { }

  loginForm!:FormGroup





  ngOnInit(): void {
    this.createForm()
  }
createForm(){
  this.loginForm=this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        role:["admin"]
  })
}
 login(){
this.service.login(this.loginForm.value).subscribe(res=>{
      // this.toaster.success("Success","Login Success")
      this.router.navigate(['/layout'])
},
  error=>{
    // this.toaster.error(error.error )
  }
  
)
 
 }


}