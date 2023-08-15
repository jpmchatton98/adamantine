import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages/pages.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { GenericTabComponent } from './tabs/generic-tab/generic-tab.component';
import { ArmorTabComponent } from './tabs/armor-tab/armor-tab.component';
import { ModificationTabComponent } from './tabs/modification-tab/modification-tab.component';
import { MeleeWeaponTabComponent } from './tabs/melee-weapon-tab/melee-weapon-tab.component';
import { RangedWeaponTabComponent } from './tabs/ranged-weapon-tab/ranged-weapon-tab.component';
import { FirearmTabComponent } from './tabs/firearm-tab/firearm-tab.component';
import { AmmoTabComponent } from './tabs/ammo-tab/ammo-tab.component';
import { GeneralStoreComponent } from './general-store.component';
import { AnimalTabComponent } from './tabs/animal-tab/animal-tab.component';
import { GeneralStoreService } from 'src/services/general-store.service';
import { RouterModule } from '@angular/router';
import { BaseTabComponent } from './tabs/base-tab/base-tab.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { SiegeWeaponTabComponent } from './tabs/siege-weapon-tab/siege-weapon-tab.component';
import { MagicItemComponent } from './magic-items/magic-item/magic-item.component';
import { MagicItemsComponent } from './magic-items/magic-items/magic-items.component';
import { PetTabComponent } from './tabs/pet-tab/pet-tab.component';

@NgModule({
  declarations: [
    StorePageComponent,
    GenericTabComponent,
    ArmorTabComponent,
    ModificationTabComponent,
    MeleeWeaponTabComponent,
    RangedWeaponTabComponent,
    FirearmTabComponent,
    AmmoTabComponent,
    GeneralStoreComponent,
    AnimalTabComponent,
    PetTabComponent,
    BaseTabComponent,
    SiegeWeaponTabComponent,
    MagicItemsComponent,
    MagicItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesModule,
    NzTableModule,
    NzCheckboxModule,
    NzSelectModule,
    NzSliderModule,
    NzInputModule,
    NzCollapseModule,
    NzButtonModule,
    NzPopoverModule,
    RouterModule,
  ],
  providers: [GeneralStoreService],
})
export class GeneralStoreModule {}
