import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { UserService } from '../../providers/user.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../providers/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TourService } from '../../providers/tour.service';
import { InfoLinkService } from '../../providers/infoLink.service';


@Component({
  selector: 'app-desk-detail-360-photos',
  templateUrl: './desk-detail-360-photos.component.html',
  styleUrls: ['./desk-detail-360-photos.component.scss']
})
export class DeskDetail360PhotosComponent implements OnInit, OnDestroy {
  private authSubscription: ISubscription;
  private uid;
  private user: User;
  private userKey;
  private tourKey;
  private infoLink;


  constructor(private router: Router, private authService: AuthService, private userService: UserService, private tourService: TourService, private infoLinkService: InfoLinkService) {
    this.authSubscription = this.authService.user.subscribe((auth) => {
      if(auth){
        this.uid = auth.uid;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
