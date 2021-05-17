import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public accountService:AccountService){}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
    console.log('App comp ts executed')
    let user = localStorage.getItem('user');
    console.log(user);
    if(user!=null){
      
      this.accountService.setCurrentUser(JSON.parse(user));
    }
   
  }

}
