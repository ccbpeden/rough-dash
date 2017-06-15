import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeskDetailMapDirectionsComponent } from './desk-detail-map-directions.component';
import { routing } from './desk-detail-map-directions.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DeskDetailMapDirectionsComponent
  ]
})
export class DeskDetailMapDirectionsModule {}
