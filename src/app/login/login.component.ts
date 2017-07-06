import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { User } from '../models/user.model';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  goToDashBoard() {
    this.router.navigate(['dashboard']);
  }
  login(email, password) {
    this.authService.loginWithEmail(email, password).then((data) => {
      this.userService.getUserByUid(data.uid).subscribe(user => {
        if(user.length > 0){
          console.log("there is a user associated");
          this.router.navigate(['pages']);
        } else {
          console.log("no user associated");
        }
      })
    })
  }
  googleLogin(){
    this.authService.loginWithGoogle().then((data) => {
      this.userService.getUserByUid(data.uid).subscribe(user => {
        if(user.length > 0){
          console.log("there is a user associated");
          this.router.navigate(['pages']);
        } else {
          console.log("no user associated");
        }
      })
    })
  }

  facebookLogin(){
    this.authService.loginWithFacebook().then((data) => {
      this.userService.getUserByUid(data.uid).subscribe(user => {
        if(user.length > 0){
          console.log("there is a user associated");
          this.router.navigate(['pages']);
        } else {
          console.log("no user associated");
        }
      })
    })
  }
}
