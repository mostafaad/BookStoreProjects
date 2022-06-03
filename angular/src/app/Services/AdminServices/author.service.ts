import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }
  addauthor(model:any):Observable<any>
  {
  return this.http.post("http://localhost:3000/admin/author/add",model)
  }
}
