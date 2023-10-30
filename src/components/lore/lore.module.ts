import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages/pages.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { LoreBaseComponent } from './lore-base/lore-base.component';
import { LoreAstralComponent } from './lore-astral/lore-astral.component';
import { LoreSeaComponent } from './lore-sea/lore-sea.component';
import { LorePantheonsComponent } from './lore-pantheons/lore-pantheons.component';

@NgModule({
  declarations: [
    LoreBaseComponent,
    LoreAstralComponent,
    LoreSeaComponent,
    LorePantheonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzTabsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzInputNumberModule,
    NzModalModule,
    RouterModule,
  ],
})
export class LoreModule {}
