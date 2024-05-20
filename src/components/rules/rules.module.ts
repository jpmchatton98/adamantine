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
import { RulesBaseComponent } from './rules-base/rules-base.component';
import { RulesCombatComponent } from './rules-combat/rules-combat.component';
import { RulesCharacterComponent } from './rules-character/rules-character.component';
import { RulesGameplayComponent } from './rules-gameplay/rules-gameplay.component';

@NgModule({
  declarations: [
    RulesBaseComponent,
    RulesCombatComponent,
    RulesCharacterComponent,
    RulesGameplayComponent
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
export class RulesModule {}
