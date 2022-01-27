import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  register(body:any){
    return this._http.post('http://localhost:3000/users/register', body);
  }

  login(body:any){
    console.log(body)
    return this._http.post('http://localhost:3000/users/login', body)
  }


}