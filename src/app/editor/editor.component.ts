import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../providers/auth.service';
import { GlobalState } from '../global.state';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  menuList:any;
  selected:any;
  viewAsList = true;
  viewAsGrid = false;
  public isMenuCollapsed:boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private _state:GlobalState,) {
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
  }
}
