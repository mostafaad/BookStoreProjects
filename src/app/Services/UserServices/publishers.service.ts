import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublishersService {

  constructor(private http:HttpClient) { }
  getpublishers():Observable<any>
  {
    return this.http.get("http://localhost:3000/user/publisher/all")
  }
}
