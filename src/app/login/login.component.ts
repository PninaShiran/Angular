import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sub: Subscription;
  person: { name: string, codeUser: Number,password:string }={name:'',codeUser:-1,password:''};
  myUser: User;
  tryLogIn() {
    this.sub = this.userSer.getUserByName(this.person.name).subscribe((succ) => {
      this.myUser = succ as User;
      if (this.person.password != this.myUser.password) {
        alert("הסיסמה שהוקשה שגויה! הכנס סיסמה שנית!");
        this.person.password=null;
      }
      else {
       this.userSer.log(this.myUser.nameUser, this.myUser.codeUser);
       this.myRouter.navigate(["allRecipes"]);
      }
    }, (err) => {
      this.userSer.setLoginUserName(this.person.name);
      this.myRouter.navigate(["register"]);
    });
     }
  constructor(public userSer: UserService, public myRouter: Router) { }
  
  
  ngOnInit(): void {

  }

}
