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
  viewAsList = true;
  viewAsGrid = false;
  public isMenuCollapsed:boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private _state:GlobalState,) {
      this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
        this.isMenuCollapsed = isCollapsed;
        console.log(isCollapsed);
      });
   }

   checkCollapse(){
     if (this.isMenuCollapsed){
       return "sidebar-collapsed";
     } else {
       return "sidebar";
     }
   }

  ngOnInit() {
  }
}
