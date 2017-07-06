import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/user.service';
import { User } from '../models/user.model';
import { AuthService } from '../providers/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.scss']
})
export class EmailDetailComponent implements OnInit {
  private uid;
  private user: User;
  private userKey;


  constructor(private authService: AuthService, private userService: UserService, private db: AngularFireDatabase) {
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
        console.log(this.user);
      };
    });
  }

  updateUser(email, invoicePref, updatesPref) {
    if(this.user){
      console.log("attempting update");
      this.userService.editUser(this.userKey, {email: email, invoicePref: invoicePref, updatesPref: updatesPref});
    }
  }

}
