import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/Services/UserServices/authors.service';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
authors:any=[]
  constructor(private authorsservice:AuthorsService) { }

  ngOnInit(): void {
    this.authorsservice.getauthors().subscribe(data=>{
      console.log(data)
      this.authors=data.data
    })
  }

}
