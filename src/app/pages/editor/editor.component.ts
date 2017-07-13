import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../providers/auth.service';
import { GlobalState } from '../../global.state';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user.service';
import { TourService } from '../../providers/tour.service';
import { Tour } from '../../models/tour.model';
import { GalleryService } from '../../providers/gallery.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {
  private authSubscription: ISubscription;
  private userSubscription: ISubscription;
  private tourSubscription: ISubscription;
  private uid;
  private user: User;
  private userKey;
  public trueTours: Tour[];
  menuList:any;
  selected:any;
  viewAsList = true;
  viewAsGrid = false;
  public isMenuCollapsed:boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private _state:GlobalState, private authService: AuthService, private modalService: NgbModal, private userService: UserService, private tourService: TourService, private galleryService: GalleryService ) {
      this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
        this.isMenuCollapsed = isCollapsed;
        console.log(isCollapsed);
      });
    this.menuList = [
      {
        "name" : "Community Account 1",
        "subMenu" : ["TrueTour1", "TrueTour2", "TrueTour3"]
      },
      {
        "name" : "Community Account 2",
        "subMenu" : ["TrueTour1", "TrueTour2", "TrueTour3"]
      },
      {
        "name" : "Community Account 4",
        "subMenu" : ["TrueTour1", "TrueTour2", "TrueTour3"]
      },
    ]
    this.authSubscription = this.authService.user.subscribe(
      (auth) => {
        if(auth == null){
          const activeModal = this.modalService.open(LoginModalComponent, {size: 'sm', backdrop: 'static', windowClass: 'login-modal'});
        } else {
          this.uid = auth.uid;
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
       return "col detail-section-collapsed";
     } else {
       return "col detail-section";
     }
   }

   select(item){
     this.selected = (this.selected === item ? null : item);
     this.isMenuCollapsed = false;
   }

   isActive(item){
     return this.selected === item;
   }

  ngOnInit() {
    this.userSubscription = this.userService.getUserByUid(this.uid).subscribe((user) => {
      if(user.length > 0)
      {
        this.user = user[0];
        this.userKey = user[0].$key;
      };
    });
    this.tourSubscription = this.tourService.getTrueTourByUid(this.userKey).subscribe((returnedTours) => {
      if(returnedTours.length > 0)
      {
        this.trueTours = returnedTours;
        console.log(this.trueTours);
      };
    });
  }

  setTourKey(key){
    this.tourService.setCurrentTourKey(key);
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
    this.tourSubscription.unsubscribe();
  }
}
