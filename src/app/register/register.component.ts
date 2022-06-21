import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
sub:Subscription;
newUser:User=new User(null,null,null,null,null);
checkUser:User;
addUser(form){
  this.sub=this.userSer.getUserByName(this.newUser.nameUser).subscribe((succ)=>{
    this.checkUser=succ as User;
    if(this.checkUser.addressUser==this.newUser.addressUser&&this.checkUser.mailUser==this.newUser.mailUser&&this.checkUser.password==this.newUser.password){
        alert("משתמש בשם זה כבר קיים במערכת! הכנס פרטים תקינים בבקשה!");
        this.newUser=new User(null,null,null,null,null);
        form.reset();
}
  },
  ()=>{
      this.myRouter.navigate(['allRecipes']);
      this.userSer.log(this.newUser.nameUser,this.newUser.codeUser);
});
}
  constructor(public userSer:UserService, public myRouter:Router) { }
  ngOnInit(): void {
    this.newUser.nameUser=this.userSer.getLoginUserName();
  }

}
