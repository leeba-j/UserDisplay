import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  API_URL = environment.API_URL;

  allUsers(){
   return this.http.get(this.API_URL);
  }
}
