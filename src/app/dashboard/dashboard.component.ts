import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  detailToDisplay="360-photos";
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
