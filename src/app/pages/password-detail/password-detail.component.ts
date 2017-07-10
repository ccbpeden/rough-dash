import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../providers/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-password-detail',
  templateUrl: './password-detail.component.html',
  styleUrls: ['./password-detail.component.scss']
})
export class PasswordDetailComponent implements OnInit {
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

  changePassword(currentPwd, newPwd, confirmPwd){
    // if(this.user) {
    //   if(currentPwd === this.user.password && newPwd === confirmPwd) {
        // this.userService.editUser(userKey, {password: newPwd});
    //   }
    // }
  }

}
