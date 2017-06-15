import { Routes, RouterModule } from '@angular/router';

import { DeskDetailMenuLinksComponent } from './desk-detail-menu-links.component';

const routes: Routes = [
  {
    path: '',
    component: DeskDetailMenuLinksComponent
  }
];

export const routing = RouterModule.forChild(routes);
