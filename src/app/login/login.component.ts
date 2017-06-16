import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  goToDashBoard() {
    this.router.navigate(['dashboard']);
  }
  login(email, password) {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['pages']);
    })
  }
  googleLogin(){
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['pages']);
    })
  }
  facebookLogin(){
    this.authService.loginWithFacebook().then((data) => {
      this.router.navigate(['pages']);
    })
  }
}
