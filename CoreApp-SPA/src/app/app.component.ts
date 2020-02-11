import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CoreApp SPA';
  jwtHelperService = new JwtHelperService();

  constructor(private authservice: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authservice.decodedToken = this.jwtHelperService.decodeToken(token);
    }
    if (user) {
      this.authservice.currentUser = user;
      this.authservice.changeMemberPhoto(user.photoUrl);
    }
  }
}
