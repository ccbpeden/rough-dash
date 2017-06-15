import { Routes, RouterModule } from '@angular/router';

import { DeskDetailInfoLinksComponent } from './desk-detail-info-links.component';

const routes: Routes = [
  {
    path: '',
    component: DeskDetailInfoLinksComponent
  }
];

export const routing = RouterModule.forChild(routes);
