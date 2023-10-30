import { Component, OnInit } from '@angular/core';
import { BaseTabComponent } from '../base-tab/base-tab.component';

@Component({
  selector: 'gs-firearm-tab',
  templateUrl: './firearm-tab.component.html',
  styleUrls: ['./firearm-tab.component.scss'],
})
export class FirearmTabComponent extends BaseTabComponent implements OnInit {
  public firearmItemData;

  public override ngOnInit(): void {
    this.data = 'weapons.firearms';
    super.ngOnInit();

    for (let item of this.itemData) {
      item.cost = this.generalStoreService.getFirearmCost(item.data);
      item.weight = this.generalStoreService.getFirearmWeight(item.data);
    }

    this.firearmItemData = {
      class: this.generalStoreService.getFirearmItemType('class'),
      mechanism: this.generalStoreService.getFirearmItemType('mechanism'),
      material: this.generalStoreService.getFirearmItemType('material'),
      barrel: this.generalStoreService.getFirearmItemType('barrel'),
      stock: this.generalStoreService.getFirearmItemType('stock'),
      barrelEnd: this.generalStoreService.getFirearmItemType('barrelEnd'),
      mechanismMod: this.generalStoreService.getFirearmItemType('mechanismMod'),
      optic: this.generalStoreService.getFirearmItemType('optic'),
      underbarrel: this.generalStoreService.getFirearmItemType('underbarrel'),
    };
  }

  public formatModifier(mod: number) {
    if (mod % 1 !== 0) {
      return `${mod}×`;
    }

    if (mod < 1) {
      return mod;
    } else {
      return `+${mod}`;
    }
  }
}
