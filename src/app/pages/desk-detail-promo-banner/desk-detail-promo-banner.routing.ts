import { Routes, RouterModule } from '@angular/router';

import { DeskDetailPromoBannerComponent } from './desk-detail-promo-banner.component';

const routes: Routes = [
  {
    path: '',
    component: DeskDetailPromoBannerComponent
  }
];

export const routing = RouterModule.forChild(routes);
