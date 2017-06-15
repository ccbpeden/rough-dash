import { Routes, RouterModule } from '@angular/router';

import { DeskDetailVidGalleryComponent } from './desk-detail-vid-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: DeskDetailVidGalleryComponent
  }
];

export const routing = RouterModule.forChild(routes);
