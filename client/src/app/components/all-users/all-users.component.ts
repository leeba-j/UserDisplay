import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }
  userNames: any = new Array();
  ngOnInit(): void {
    this.getAllUsers();
  
  }

  //This method gets all the users
   public getAllUsers():void{
    this.usersService.allUsers().subscribe(data => { 
      this.userNames = data;
    });
  }

  public getOneUser(id:any): void{
    this.router.navigate([`/user/${id}`]);
  }
}
