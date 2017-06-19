import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-row-detail',
  templateUrl: './edit-row-detail.component.html',
  styleUrls: ['./edit-row-detail.component.scss']
})
export class EditRowDetailComponent implements OnInit {
  tourName = "Lovely Wedding Venue";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToDashboard(){
    this.router.navigate(['pages']);
  }
}
