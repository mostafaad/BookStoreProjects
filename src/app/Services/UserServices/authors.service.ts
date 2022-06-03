import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient) { }
  getauthors():Observable<any>
  {
     return this.http.get("http://localhost:3000/user/author/all")
  }
}
