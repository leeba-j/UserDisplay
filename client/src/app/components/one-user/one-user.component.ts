import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {
  selectedUser: any;
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSelectedUser();
  }
getSelectedUser(){
  let id = this.activatedRoute.snapshot.paramMap.get("id")
  this.usersService.oneUser(id).subscribe(data => {this.selectedUser = data})
}
}
