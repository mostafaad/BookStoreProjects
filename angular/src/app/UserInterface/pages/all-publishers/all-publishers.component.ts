import { Component, OnInit } from '@angular/core';
import { PublishersService } from 'src/app/Services/UserServices/publishers.service';

@Component({
  selector: 'app-all-publishers',
  templateUrl: './all-publishers.component.html',
  styleUrls: ['./all-publishers.component.css']
})
export class AllPublishersComponent implements OnInit {
publishers:any=[]
  constructor(private puplisherservice:PublishersService) { }

  ngOnInit(): void {
    this.puplisherservice.getpublishers().subscribe(data=>{
      console.log(data)
      this.publishers=data.data
    })
  }

}
