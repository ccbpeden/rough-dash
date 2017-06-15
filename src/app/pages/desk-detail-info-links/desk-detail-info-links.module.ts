import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeskDetailInfoLinksComponent } from './desk-detail-info-links.component';
import { routing } from './desk-detail-info-links.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DeskDetailInfoLinksComponent
  ]
})
export class DeskDetailInfoLinksModule {}
