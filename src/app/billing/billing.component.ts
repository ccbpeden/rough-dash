import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  detailSelected = "invoices";
  invoiceAlerts = 1;
  alertAlerts = 2;
  paymentAlerts = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){

  }

  selectDetail(detail){
    this.detailSelected = detail;
  }

  highlightSelectedDetail(detail){
    if (this.detailSelected == detail){
      return "selectedDetail";
    }
  }
}
