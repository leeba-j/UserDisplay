import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  userNames: any = new Array();
  ngOnInit(): void {
    this.usersService.allUsers().subscribe(data => { 
      this.userNames = data;
    })
  }

  //Get all the users
   getAllUsers(){

  }
}
