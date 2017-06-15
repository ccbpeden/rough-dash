import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  countries = ["United States", "Unwashed Swine"];
  imgSrc="/assets/images/generic-user.jpg";
  constructor() { }

  ngOnInit() {
  }

}
