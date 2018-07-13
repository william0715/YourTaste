import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userID : string;
  private userPW : string;

  constructor( private http: HttpClient ) { 

  }

  ngOnInit() {

  }

  login() {
    var User = {
      ID: this.userID,
      PW: this.userPW
    }

    this.http.post('http://localhost:4000/users/login', User).subscribe(
      (res) => {
        console.log('Login!!');
      },
      (err) => {
        console.log('Login failed.');
      });
  }

  add() {
    var User = {
      ID: this.userID,
      PW: this.userPW
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':  '*'
      })
    };
    
    this.http.post('http://localhost:4000/users/add', User, httpOptions).subscribe(
      (res) => {
        console.log('Add user!!');
      },
      (err) => {
        console.log('Add user failed.');
      });
  }
}
