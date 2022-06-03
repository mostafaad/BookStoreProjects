import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorService } from 'src/app/Services/AdminServices/author.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
model:any={}
  constructor(private authorservice:AuthorService) { }

  ngOnInit(): void {
  }
  handleSubmit(add:NgForm)
  {
    this.authorservice.addauthor(this.model).subscribe(res=>{console.log(res)})
  }
}
