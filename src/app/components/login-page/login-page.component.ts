import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }
    
  ngOnInit() {
  }

  onGoogleLogin() {
    this.authService.googleLogin()
    .then((res) => {
      this.router.navigate(['/private']);
    }).catch((err) => {
      this.flashMessage.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
    });
  }

  onLoginUser() {
    this.authService.loginUser(this.email, this.password)
    .then((res) => {
      this.flashMessage.show('User logged correctly', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/private']);
    }).catch((err) => {
      this.flashMessage.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
      this.password = '';
      this.router.navigate(['/login']);
    });
  }
}
