import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { CharacterSheetService } from 'src/services/character-sheet.service';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { PagesModule } from 'src/components/pages/pages.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SpellsComponent } from './pages/spells/spells.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ExploitsComponent } from './pages/exploits/exploits.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [
    CharacterSheetComponent,
    SpellsComponent,
    InventoryComponent,
    ExploitsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NzTabsModule,
    NzTableModule,
    NzModalModule,
    NzInputModule,
    NzPopoverModule,
    NzButtonModule,
    NzInputModule,
    NzInputNumberModule,
    NzCheckboxModule,
    PagesModule,
    FormsModule,
    EditorModule,
  ],
  providers: [CharacterSheetService, NzNotificationService],
})
export class CharacterSheetModule {}
