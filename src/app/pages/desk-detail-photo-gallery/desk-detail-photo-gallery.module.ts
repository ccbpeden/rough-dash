import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeskDetailPhotoGalleryComponent } from './desk-detail-photo-gallery.component';
import { routing } from './desk-detail-photo-gallery.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DeskDetailPhotoGalleryComponent
  ]
})
export class DeskDetailPhotoGalleryModule {}
