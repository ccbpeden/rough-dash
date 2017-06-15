import { Routes, RouterModule } from '@angular/router';

import { DeskDetailMapDirectionsComponent } from './desk-detail-map-directions.component';

const routes: Routes = [
  {
    path: '',
    component: DeskDetailMapDirectionsComponent
  }
];

export const routing = RouterModule.forChild(routes);
