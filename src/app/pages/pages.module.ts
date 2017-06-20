import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { AuthService } from '../providers/auth.service';
import { Pages } from './pages.component';
import { EditorComponent } from '../editor/editor.component';
import { EditRowDetailComponent } from '../edit-row-detail/edit-row-detail.component';
import { EditGridDetailComponent } from '../edit-grid-detail/edit-grid-detail.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages, EditorComponent, EditRowDetailComponent, EditGridDetailComponent],
  providers: [AuthService],
})
export class PagesModule {
}
