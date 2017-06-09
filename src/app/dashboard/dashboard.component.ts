import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  viewAsList = true;
  viewAsGrid = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEditor(){
    this.router.navigate(['editor']);
  }

  gridView(){
    this.viewAsList = false;
    this.viewAsGrid = true;
  }

  listView(){
    this.viewAsList = true;
    this.viewAsGrid = false;
  }

}
