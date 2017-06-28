import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../providers/auth.service';
import { GlobalState } from '../global.state';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public isMenuCollapsed:boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private modalService: NgbModal, private _state:GlobalState,) {
      this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
        this.isMenuCollapsed = isCollapsed;
        console.log(isCollapsed);
      });
   }

   checkSidebarCollapse(){
     if (this.isMenuCollapsed){
       return "sidebar-collapsed";
     } else {
       return "sidebar";
     }
   }

   checkDetailCollapse(){
     if (this.isMenuCollapsed){
       return "col col-sm-9 body-commence-collapsed";
     } else {
       return "col col-sm-9 body-commence";
     }
   }

   logout(){
     this.authService.logout();
   }

   ngOnInit() {
   }
}
