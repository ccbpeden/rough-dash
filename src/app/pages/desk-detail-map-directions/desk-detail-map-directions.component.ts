import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-desk-detail-map-directions',
  templateUrl: './desk-detail-map-directions.component.html',
  styleUrls: ['./desk-detail-map-directions.component.scss']
})
export class DeskDetailMapDirectionsComponent implements OnInit {
  defaultLat: number = 51.678418;
  defaultLong: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
