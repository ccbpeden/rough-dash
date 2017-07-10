import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { UserService } from '../../providers/user.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../providers/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit, OnDestroy {
  private authSubscription: ISubscription;
  private userSubscription: ISubscription;
  defaultUserImageUrl = "/assets/images/user-icon.png";
  userImageUrl: string;
  private uid;
  private user: User;
  private userKey;


  constructor(private authService: AuthService, private userService: UserService, private db: AngularFireDatabase) {
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
        console.log(this.user);
        if(this.user.avatarImageUrl){
          this.userImageUrl = this.user.avatarImageUrl;
        } else {
          this.userImageUrl = this.defaultUserImageUrl;
        }
      };
    });
  }

  updateUser(firstName, lastName, website, company, phoneNumber){
    if(this.user) {
      this.userService.editUser(this.userKey, {firstName: firstName, lastName: lastName, website: website, company: company, phoneNumber: phoneNumber});
    }
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
