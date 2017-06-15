import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeskDetailPromoBannerComponent } from './desk-detail-promo-banner.component';
import { routing } from './desk-detail-promo-banner.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DeskDetailPromoBannerComponent
  ]
})
export class DeskDetailPromoBannerModule {}
