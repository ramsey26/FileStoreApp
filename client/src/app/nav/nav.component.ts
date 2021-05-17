import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'FileStore';
  linkFileUpload ='File Upload';
  model : any={};
  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
  }

  login(){
    console.log('nav comp ts executed')
    this.accountService.login(this.model).subscribe(user=>{
      const appUser:User = user;
      this.accountService.setCurrentUser(appUser);
    }
      
    )
    console.log(this.model);
  }

  logout(){
    this.accountService.logout();
  }
}
