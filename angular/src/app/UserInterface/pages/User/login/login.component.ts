import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required ])
  })

  isSubmitted = false
  errorMsg:any=null
  constructor(private userservice :UserService , private router : Router) {
    let token = localStorage.getItem("token")
    if(token) this.router.navigateByUrl("")
  }
  get email(){return this.loginForm.get("email")}

  get userInfo(){return this.loginForm.controls}
  ngOnInit(): void {
  }
  handleLogin() {
    this.isSubmitted = true
    console.log(this.loginForm)
    if(this.loginForm.valid){
      this.userservice.login(this.loginForm.value).subscribe(res=>{
        console.log(res)

          // this.router.navigateByUrl("successLogin")
          //this.router.navigate(['successLogin'])
          this.userservice.navFlag = true
          console.log(res.token)
          localStorage.setItem("token" , res.data.token)
          this.userservice.isLogIn = true


        if(res.error){
          this.errorMsg = res.error
        }
      })

    }
  }

}
