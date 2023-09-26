import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatabaseComponent } from 'src/components/database/database.component';
import { DataService } from 'src/services/data.service';
import { SpellTabComponent } from 'src/components/database/tabs/spell-tab/spell-tab.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ClassTabComponent } from 'src/components/database/tabs/class-tab/class-tab.component';
import { ExploitTabComponent } from 'src/components/database/tabs/exploit-tab/exploit-tab.component';
import { RaceTabComponent } from 'src/components/database/tabs/race-tab/race-tab.component';
import { BackgroundTabComponent } from 'src/components/database/tabs/background-tab/background-tab.component';
import { FeatTabComponent } from 'src/components/database/tabs/feat-tab/feat-tab.component';
import { TransformationTabComponent } from 'src/components/database/tabs/transformation-tab/transformation-tab.component';
import { ExtraTabComponent } from 'src/components/database/tabs/extra-tab/extra-tab.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PagesModule } from '../pages/pages.module';
import { FightingStyleTabComponent } from './tabs/fighting-style-tab/fighting-style-tab.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    DatabaseComponent,

    SpellTabComponent,
    ExploitTabComponent,
    RaceTabComponent,
    ClassTabComponent,
    BackgroundTabComponent,
    FeatTabComponent,
    TransformationTabComponent,
    ExtraTabComponent,
    FightingStyleTabComponent,
  ],
  imports: [
    PagesModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzTabsModule,
    NzCollapseModule,
    NzSelectModule,
  ],
  providers: [DataService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [DatabaseComponent],
})
export class DatabaseModule {}
