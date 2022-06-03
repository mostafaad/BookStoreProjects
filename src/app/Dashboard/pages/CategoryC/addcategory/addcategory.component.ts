import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/Services/AdminServices/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
model:any={}
  constructor(private categoryservice:CategoryService) { }

  ngOnInit(): void {
  }
  handleSubmit(add:NgForm)
  {NgForm
    this.categoryservice.addcategory(this.model).subscribe(res=>{console.log(res)})
  }
}
