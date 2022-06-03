import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from 'src/app/Services/AdminServices/userservice.service';

@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent implements OnInit {
model:any={}
  constructor(private userservice:UserserviceService) { }

  ngOnInit(): void {
  }
  handleSubmit(reg:NgForm)
  {
    this.userservice.signUpAdmin(this.model).subscribe(res=>{console.log(res)})
  }
}
