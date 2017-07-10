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
  private authSubscription: ISubscription;
  public isMenuCollapsed:boolean = false;
  public selectedDetail = "profile";

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private modalService: NgbModal, private globalState:GlobalState,) {
  // subscription to determine whether menu is collapsed
    this.globalState.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
      console.log(isCollapsed);
    });
  // subscription to determine whether or not to invoke login modal
  this.authSubscription = this.authService.user.subscribe(
    (auth) => {
      if(auth == null){
        const activeModal = this.modalService.open(LoginModalComponent, {size: 'sm', backdrop: 'static', windowClass: 'login-modal'});
        console.log(auth);
      } else {
        console.log(auth);
      }
    });
   }

   // class assignment code for sidebar
   checkSidebarCollapse(){
     if (this.isMenuCollapsed){
       return "sidebar-collapsed";
     } else {
       return "sidebar";
     }
   }

    // class assignment code for detail
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

   ngOnInit() {
   }

   ngOnDestroy() {
     this.authSubscription.unsubscribe();
   }
}
