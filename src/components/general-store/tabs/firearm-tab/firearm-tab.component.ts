import { Component, OnInit } from '@angular/core';
import { BaseTabComponent } from '../base-tab/base-tab.component';

@Component({
  selector: 'gs-firearm-tab',
  templateUrl: './firearm-tab.component.html',
  styleUrls: ['./firearm-tab.component.scss'],
})
export class FirearmTabComponent extends BaseTabComponent implements OnInit {
  public override ngOnInit(): void {
    this.data = 'weapons.firearms';
    super.ngOnInit();

    for (let item of this.itemData) {
      item.cost = this.generalStoreService.getFirearmCost(item.data);
      item.weight = this.generalStoreService.getFirearmWeight(item.data);
    }
  }
}
