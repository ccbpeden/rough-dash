import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { Pages } from './pages.component';
import { EditorComponent } from './editor/editor.component';
import { EditRowDetailComponent } from './edit-row-detail/edit-row-detail.component';
import { EditGridDetailComponent } from './edit-grid-detail/edit-grid-detail.component';
import { AccountComponent } from './account/account.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { BillingDetailComponent } from './billing-detail/billing-detail.component';
import { PasswordDetailComponent } from './password-detail/password-detail.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { LoginModalComponent } from './login-modal/login-modal.component';


import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user.service';
import { ThreeSixtyPhotoService } from '../providers/360photo.service';
import { AddressService } from '../providers/address.service';
import { BannerService } from '../providers/banner.service';
import { CardService } from '../providers/card.service';
import { CategoryService } from '../providers/category.service';
import { GalleryService } from '../providers/gallery.service';
import { InfoLinkService } from '../providers/infoLink.service';
import { MapService } from '../providers/map.service';
import { MenuLinkService } from '../providers/menuLink.service';
import { PartnerListService } from '../providers/partnerList.service';
import { PhotoService } from '../providers/photo.service';
import { ProfileService } from '../providers/profile.service';
import { TourService } from '../providers/tour.service';
import { VideoService } from '../providers/video.service';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages, EditorComponent, EditRowDetailComponent, EditGridDetailComponent, AccountComponent, InvoiceDetailComponent, BillingDetailComponent, PasswordDetailComponent, EmailDetailComponent, ProfileDetailComponent],
  providers: [AuthService, UserService, ThreeSixtyPhotoService, AddressService, BannerService, CardService, CategoryService, GalleryService, InfoLinkService, MapService, MenuLinkService, PartnerListService, PhotoService, ProfileService, TourService, VideoService],
  entryComponents: [
    LoginModalComponent,
  ],
})
export class PagesModule {
}
