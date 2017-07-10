import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { GlobalState } from '../../../global.state';
import { Router } from '@angular/router';
import { UserService } from '../../../providers/user.service';
import { User } from '../../../models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop implements OnInit {

  private uid: string;
  private user: User;
  private userKey: string;
  private userImageUrl: string;
  private defaultUserImageUrl = "/assets/images/user-icon.png";
  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;
  public query = '';
  public trueTours = [ "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus",
                       "Belgium","Bosnia & Herzegovina","Bulgaria","Croatia","Cyprus",
                       "Czech Republic","Denmark","Estonia","Finland","France","Georgia",
                       "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo",
                       "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta",
                       "Moldova","Monaco","Montenegro","Netherlands","Norway","Poland",
                       "Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia",
                       "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];
  public filteredList = [];
  public elementRef;

  constructor(private _state:GlobalState, private authService: AuthService, private router: Router, private userService: UserService, private db: AngularFireDatabase) {
    this.authService.user.subscribe((auth) => {
      if(auth) {
        this.uid = auth.uid;
      }
    });
  }

  ngOnInit() {
    this.userService.getUserByUid(this.uid).subscribe((user) => {
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

  filter() {
    if (this.query !== ""){
        this.filteredList = this.trueTours.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    } else {
        this.filteredList = [];
    }
  }

  select(item){
      this.query = item;
      this.filteredList = [];
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public logout() {
    this.authService.logout().then((data) => {
      console.log("you have logged out");
    })
  }
  public gotoAccount(){
    console.log('hi you are going to the account page now');
    this.router.navigate(['account']);
  }
}
