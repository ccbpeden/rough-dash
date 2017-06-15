import { Routes, RouterModule } from '@angular/router';

import { DeskDetail360PhotosComponent } from './desk-detail-360-photos.component';

const routes: Routes = [
  {
    path: '',
    component: DeskDetail360PhotosComponent
  }
];

export const routing = RouterModule.forChild(routes);
