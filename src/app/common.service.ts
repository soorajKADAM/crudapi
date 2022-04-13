import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  createUser(user){
    return this._http.post("http://localhost:3000/users", user);
  }
  getallUser(){
    return this._http.get("http://localhost:3000/users");
  }
  updateUser(){}
  deleteUser(){}
}
