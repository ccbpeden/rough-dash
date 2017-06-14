import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  viewAsList = true;
  viewAsGrid = false;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
