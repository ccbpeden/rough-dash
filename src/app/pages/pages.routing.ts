import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
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
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
