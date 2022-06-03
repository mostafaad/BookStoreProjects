import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isLogIn : boolean = false
  public navFlag:boolean= false

  constructor(private http:HttpClient) { }
signUp(model:any):Observable<any>
{
return this.http.post("http://localhost:3000/user/register",model)
}
login(obj:any) : Observable<any>{
  return this.http.post("http://localhost:3000/user/login", obj )
}
}
