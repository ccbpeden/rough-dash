import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {
  userImageUrl = "/assets/images/user-icon.png";

  constructor() { }

  ngOnInit() {
  }

}
