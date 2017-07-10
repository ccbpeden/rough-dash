import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../providers/auth.service';
import { GlobalState } from '../../global.state';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  private subscription: ISubscription;
  public isMenuCollapsed:boolean = false;
  public selectedDetail = "profile";

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private modalService: NgbModal, private _state:GlobalState,) {
  this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
    this.isMenuCollapsed = isCollapsed;
    console.log(isCollapsed);
  });

  this.subscription = this.authService.user.subscribe(
    (auth) => {
      if(auth == null){
        const activeModal = this.modalService.open(LoginModalComponent, {size: 'sm', backdrop: 'static', windowClass: 'login-modal'});
        console.log(auth);
      } else {
        console.log(auth);
      }
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
     this.router.navigate(['']);
   }

   ngOnInit() {
   }

   setSelectedDetail(detail){
     this.selectedDetail = detail;
     console.log(detail);
     this.router.navigate(['account/'+detail]);
   }

   isSelectedDetail(detail){
     if(this.selectedDetail === detail){
       return "selected-menu-item";
     } else {
       return "menu-item";
     }
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }
}
