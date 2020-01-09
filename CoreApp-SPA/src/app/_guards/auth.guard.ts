import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService,
              private alertify: AlertifyService) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()){
      return true;
    }

    this.alertify.error('You must be logged in to access this page');
    this.router.navigate(['/home']);
    return false;
  }
}
