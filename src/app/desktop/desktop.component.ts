import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
  detailToDisplay="dashboard";
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  activateDetail(detail){
    this.detailToDisplay = detail;
  }

  currentFocus(detail){
    if (this.detailToDisplay == detail){
      return "selectedDetail";
    }
  }
}
