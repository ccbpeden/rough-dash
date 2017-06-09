import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-grid-detail',
  templateUrl: './dash-grid-detail.component.html',
  styleUrls: ['./dash-grid-detail.component.css']
})
export class DashGridDetailComponent implements OnInit {

  constructor(private router: Router) { }
  tourName = "Lovely Wedding Venue";
  ngOnInit() {
  }
  goToEditor(){
    this.router.navigate(['editor']);
  }
}
