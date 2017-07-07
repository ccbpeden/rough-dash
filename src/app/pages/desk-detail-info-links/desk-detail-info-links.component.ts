import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../providers/user.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../providers/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TourService } from '../../providers/tour.service';
import { InfoLinkService } from '../../providers/infoLink.service';


@Component({
  selector: 'app-desk-detail-info-links',
  templateUrl: './desk-detail-info-links.component.html',
  styleUrls: ['./desk-detail-info-links.component.scss']
})
export class DeskDetailInfoLinksComponent implements OnInit {
  private uid;
  private user: User;
  private userKey;
  private tourKey;
  private infoLink;

  constructor(private router: Router, private authService: AuthService, private userService: UserService, private tourService: TourService, private infoLinkService: InfoLinkService) {
    this.authService.user.subscribe((auth) => {
      this.uid = auth.uid;
    });
  }

  ngOnInit() {
    this.tourKey = this.tourService.returnCurrentTourKey();
    if (this.tourKey) {
      this.infoLinkService.getInfoLinkListByTTID(this.tourKey).subscribe((links) => {
        this.infoLink = links[0];
        console.log(this.infoLink);
      });
    }
  }

}
