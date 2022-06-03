import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {}
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }
  handleSubmit(reg: NgForm) {

    this.userservice.signUp(this.model).subscribe(res => {
      console.log(res)})

  }
}
