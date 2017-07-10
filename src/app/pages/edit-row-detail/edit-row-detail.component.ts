import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user.service';
import { TourService } from '../../providers/tour.service';
import { Tour } from '../../models/tour.model';
import { GalleryService } from '../../providers/gallery.service';
import { GlobalState } from '../../global.state';

@Component({
  selector: 'app-edit-row-detail',
  templateUrl: './edit-row-detail.component.html',
  styleUrls: ['./edit-row-detail.component.scss']
})
export class EditRowDetailComponent implements OnInit {
  private uid;
  private user: User;
  private userKey;
  private trueTours: Tour[];

  constructor(private router: Router, private authService: AuthService, private userService: UserService, private tourService: TourService, private galleryService: GalleryService, private globalState: GlobalState) {
    this.authService.user.subscribe((auth) => {
      this.uid = auth.uid;
    });
  }

  ngOnInit() {
    this.userService.getUserByUid(this.uid).subscribe((user) => {
      if(user.length > 0)
      {
        this.user = user[0];
        this.userKey = user[0].$key;
      };
    });
    this.tourService.getTrueTourByUid(this.userKey).subscribe((returnedTours) => {
      if(returnedTours.length > 0)
      {
        this.trueTours = returnedTours;
        console.log(this.trueTours);
      };
    });
  }

  goToDashboard(){
    this.router.navigate(['pages']);
  }

  setTourKey(key){
    this.tourService.setCurrentTourKey(key);
  }
}
