import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-grid-detail',
  templateUrl: './edit-grid-detail.component.html',
  styleUrls: ['./edit-grid-detail.component.scss']
})
export class EditGridDetailComponent implements OnInit {
  constructor(private router: Router) { }
  tourName = "Lovely Wedding Venue";
  ngOnInit() {
  }
  goToEditor(){
    this.router.navigate(['editor']);
  }
}
