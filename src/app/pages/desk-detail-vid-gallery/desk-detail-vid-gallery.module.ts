import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeskDetailVidGalleryComponent } from './desk-detail-vid-gallery.component';
import { routing } from './desk-detail-vid-gallery.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DeskDetailVidGalleryComponent
  ]
})
export class DeskDetailVidGalleryModule {}
