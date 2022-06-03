import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  addcategory(model:any):Observable<any>
  {
  return this.http.post("http://localhost:3000/admin/category/add",model)
  }

}
