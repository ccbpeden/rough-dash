import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeskDetailMenuLinksComponent } from './desk-detail-menu-links.component';
import { routing } from './desk-detail-menu-links.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DeskDetailMenuLinksComponent
  ]
})
export class DeskDetailMenuLinksModule {}
