import { Component } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { GlobalState } from '../../../global.state';
import { Router } from '@angular/router';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {

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

  constructor(private _state:GlobalState, private authService: AuthService, private router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
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
      this.router.navigate(['login']);
    })
  }
}
