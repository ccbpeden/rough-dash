import { Routes, RouterModule } from '@angular/router';

import { DeskDetailPhotoGalleryComponent } from './desk-detail-photo-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: DeskDetailPhotoGalleryComponent
  }
];

export const routing = RouterModule.forChild(routes);
