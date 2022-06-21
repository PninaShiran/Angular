import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
currentUser=new Subject<{name:string, codeUser:number}>();

loggedInUsername:string='';
getUserByName(name){
  return this.myHttp.get<User>("https://localhost:44397/api/user?name="+name);
}
addUser(u:User){
  return this.myHttp.post<User>("https://localhost:44397/api/user",u);
}
setLoginUserName(name){
  this.loggedInUsername=name;
}
getLoginUserName():string{
  return this.loggedInUsername;
}
log(name, codeUser) {
  localStorage.setItem("currentUser", JSON.stringify({ name, codeUser }));
  this.currentUser.next({ name, codeUser });
}



  constructor(private myHttp:HttpClient) { }
}
