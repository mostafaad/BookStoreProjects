import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  constructor(private http:HttpClient) { }
  addpublisher(model:any):Observable<any>
  {
  return this.http.post("http://localhost:3000/admin/publisher/add",model)
  }
}
