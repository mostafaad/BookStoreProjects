import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PublisherService } from 'src/app/Services/AdminServices/publisher.service';

@Component({
  selector: 'app-addpublisher',
  templateUrl: './addpublisher.component.html',
  styleUrls: ['./addpublisher.component.css']
})
export class AddpublisherComponent implements OnInit {
model:any={}
  constructor(private publisherservice:PublisherService) { }

  ngOnInit(): void {
  }
  handleSubmit(add:NgForm)
  {
    this.publisherservice.addpublisher(this.model).subscribe(res=>{console.log(res)})
  }
}
