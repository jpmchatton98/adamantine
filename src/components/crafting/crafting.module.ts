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
import { CraftingComponent } from './crafting.component';
import { AlchemyComponent } from './tabs/alchemy/alchemy.component';
import { BlacksmithingComponent } from './tabs/blacksmithing/blacksmithing.component';
import { CookingComponent } from './tabs/cooking/cooking.component';
import { EnchantingComponent } from './tabs/enchanting/enchanting.component';
import { EngineeringComponent } from './tabs/engineering/engineering.component';
import { LeatherworkingComponent } from './tabs/leatherworking/leatherworking.component';
import { RunecarvingComponent } from './tabs/runecarving/runecarving.component';
import { ScribingComponent } from './tabs/scribing/scribing.component';
import { TinkeringComponent } from './tabs/tinkering/tinkering.component';
import { WhittlingComponent } from './tabs/whittling/whittling.component';
import { WoodcarvingComponent } from './tabs/woodcarving/woodcarving.component';
import { MinorComponent } from './tabs/minor/minor.component';
import { CraftingTableDataService } from 'src/services/crafting-table-data.service';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    CraftingComponent,
    AlchemyComponent,
    BlacksmithingComponent,
    CookingComponent,
    EnchantingComponent,
    EngineeringComponent,
    LeatherworkingComponent,
    RunecarvingComponent,
    ScribingComponent,
    TinkeringComponent,
    WhittlingComponent,
    WoodcarvingComponent,
    MinorComponent,
    TableComponent,
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
  providers: [CraftingTableDataService],
})
export class CraftingModule {}
