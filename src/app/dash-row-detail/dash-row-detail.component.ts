import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-row-detail',
  templateUrl: './dash-row-detail.component.html',
  styleUrls: ['./dash-row-detail.component.css']
})
export class DashRowDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToEditor(){
    this.router.navigate(['editor']);
  }
}
