import { NgModule, ApplicationRef }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { googleMapsAPIKey } from '../../googlemapsapi-key';

import { DeskDetailMapDirectionsComponent } from './desk-detail-map-directions.component';
import { routing } from './desk-detail-map-directions.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: googleMapsAPIKey.apiKey
    })
  ],
  declarations: [
    DeskDetailMapDirectionsComponent
  ]
})
export class DeskDetailMapDirectionsModule {}
