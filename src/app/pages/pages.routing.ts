import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';
import { EditRowDetailComponent } from '../edit-row-detail/edit-row-detail.component';
import { EditGridDetailComponent } from '../edit-grid-detail/edit-grid-detail.component';
import { AuthService } from '../providers/auth.service';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: '360-photos',  loadChildren: './desk-detail-360-photos/desk-detail-360-photos.module#DeskDetail360PhotosModule' },
      { path: 'promo-banner',  loadChildren: './desk-detail-promo-banner/desk-detail-promo-banner.module#DeskDetailPromoBannerModule' },
      { path: 'menu-links',  loadChildren: './desk-detail-menu-links/desk-detail-menu-links.module#DeskDetailMenuLinksModule' },
      { path: 'vid-gallery',  loadChildren: './desk-detail-vid-gallery/desk-detail-vid-gallery.module#DeskDetailVidGalleryModule' },
      { path: 'photo-gallery', loadChildren: './desk-detail-photo-gallery/desk-detail-photo-gallery.module#DeskDetailPhotoGalleryModule' },
      { path: 'map-directions', loadChildren: './desk-detail-map-directions/desk-detail-map-directions.module#DeskDetailMapDirectionsModule'  },
      { path: 'info-links', loadChildren: './desk-detail-info-links/desk-detail-info-links.module#DeskDetailInfoLinksModule' },
    ],
    canActivate: [AuthService]
  },
  {
    path: 'editor',
    component: EditorComponent,
    children: [
      {path: '', redirectTo: 'edit-row-detail', pathMatch: 'full' },
      {path: 'edit-row-detail', component: EditRowDetailComponent },
      {path: 'edit-grid-detail', component: EditGridDetailComponent },
    ],
    canActivate: [AuthService]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
