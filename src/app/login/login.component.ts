import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  constructor(private authService: AuthService, private googleAuth: AngularFireAuth) {
    this.googleAuth.authState.subscribe(user => {
      this.user = user;
    })
   }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

}
