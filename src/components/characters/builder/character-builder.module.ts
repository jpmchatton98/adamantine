import { NgModule } from '@angular/core';
import { RaceTabComponent } from './tabs/race-tab/race-tab.component';
import { CharacterBuilderComponent } from './character-builder/character-builder.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DataService } from 'src/services/data.service';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PagesModule } from 'src/components/pages/pages.module';
import { ClassTabComponent } from './tabs/class-tab/class-tab.component';
import { ClassComponent } from './pages/class/class.component';
import { StoreModule } from '@ngrx/store';
import { BackgroundTabComponent } from './tabs/background-tab/background-tab.component';
import { updateReducer } from 'src/components/pages/features/builder.reducer';
import { CharacterBuilderService } from 'src/services/character-builder.service';
import { GeniusTabComponent } from './tabs/genius-tab/genius-tab.component';
import { BasicInfoTabComponent } from './tabs/basic-info-tab/basic-info-tab.component';
import { ScoreTabComponent } from './tabs/score-tab/score-tab.component';
import { EquipmentTabComponent } from './tabs/equipment-tab/equipment-tab.component';
import { EquipmentChoiceComponent } from './pages/equipment/equipment-choice/equipment-choice.component';
import { EquipmentItemComponent } from './pages/equipment/equipment-item/equipment-item.component';

@NgModule({
  declarations: [
    CharacterBuilderComponent,
    RaceTabComponent,
    ClassTabComponent,
    BackgroundTabComponent,
    ClassComponent,
    GeniusTabComponent,
    BasicInfoTabComponent,
    ScoreTabComponent,
    EquipmentTabComponent,
    EquipmentChoiceComponent,
    EquipmentItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzTabsModule,
    NzCollapseModule,
    NzSelectModule,
    NzModalModule,
    NzButtonModule,
    NzSwitchModule,
    DragDropModule,
    StoreModule.forRoot({ update: updateReducer }),

    PagesModule,
  ],
  providers: [DataService, CharacterBuilderService],
  bootstrap: [CharacterBuilderComponent],
})
export class CharacterBuilderModule {}
