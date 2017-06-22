import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login(email, password) {
    this.authService.loginWithEmail(email, password).then((data) => {
      this.activeModal.close();
    })
  }
  googleLogin(){
    this.authService.loginWithGoogle().then((data) => {
      this.activeModal.close();
    })
  }
  facebookLogin(){
    this.authService.loginWithFacebook().then((data) => {
      this.activeModal.close();
    })
  }
}
