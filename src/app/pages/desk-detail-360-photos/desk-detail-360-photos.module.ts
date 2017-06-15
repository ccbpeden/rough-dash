import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeskDetail360PhotosComponent } from './desk-detail-360-photos.component';
import { routing } from './desk-detail-360-photos.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DeskDetail360PhotosComponent
  ]
})
export class DeskDetail360PhotosModule {}
