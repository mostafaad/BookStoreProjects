import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/UserServices/categories.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
categories:any=[]
  constructor( private catservice:CategoriesService) { }

  ngOnInit(): void {
    this.catservice.getcategories().subscribe(data=>{
      console.log(data)
      this.categories=data.data
    })
  }

}
