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

    this.http.post('url', User).subscribe(
      (res) => {
        
      },
      (err) => {

      });
  }
}
