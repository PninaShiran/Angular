import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
user:string="אורח";
exit(){
  this.user="אורח";
  localStorage.removeItem("currentUser");
}
  constructor(public userSer:UserService) { }

  ngOnInit(): void {
    let store = JSON.parse(localStorage.getItem('currentUser'));
    if(store){
      this.user =store.name;
      return;
    }
    this.userSer.currentUser.subscribe((succ)=>{
      this.user=succ.name;
    });
  }

}
