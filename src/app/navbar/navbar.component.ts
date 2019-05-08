import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user;
  constructor(private authService: AuthService, private googleAuth: AngularFireAuth) {
      this.googleAuth.authState.subscribe(user => {
        this.user = user;
      })
   }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }

}
