import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user.service';
import { TourService } from '../../providers/tour.service';
import { Tour } from '../../models/tour.model';
import { GalleryService } from '../../providers/gallery.service';
import { GlobalState } from '../../global.state';

@Component({
  selector: 'app-edit-grid-detail',
  templateUrl: './edit-grid-detail.component.html',
  styleUrls: ['./edit-grid-detail.component.scss']
})

export class EditGridDetailComponent implements OnInit, OnDestroy {
  private authSubscription: ISubscription;
  private userSubscription: ISubscription;
  private tourSubscription: ISubscription;
  private uid;
  private user: User;
  private userKey;
  public trueTours: Tour[];

  constructor(private router: Router, private authService: AuthService, private userService: UserService, private tourService: TourService, private galleryService: GalleryService, private globalState: GlobalState) {
    this.authSubscription = this.authService.user.subscribe((auth) => {
      if(auth){
        this.uid = auth.uid;
      }
    });
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
