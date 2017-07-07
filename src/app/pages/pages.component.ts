import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { LoginModalComponent } from './../login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pages',
  styleUrls: ['./pages.scss'],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-main clearfix">
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor(private _menuService: BaMenuService, private authService: AuthService, private modalService: NgbModal,) {
    this.authService.user.subscribe(
      (auth) => {
        if(auth == null){
          const activeModal = this.modalService.open(LoginModalComponent, {size: 'sm', backdrop: 'static', windowClass: 'login-modal'});
          console.log(auth);
        } else {
          console.log(auth);
        }
      });
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
