import { Component, OnInit } from '@angular/core';
import { BaseTabComponent } from '../base-tab/base-tab.component';

@Component({
  selector: 'gs-ranged-weapon-tab',
  templateUrl: './ranged-weapon-tab.component.html',
  styleUrls: ['./ranged-weapon-tab.component.scss'],
})
export class RangedWeaponTabComponent
  extends BaseTabComponent
  implements OnInit
{
  public override ngOnInit(): void {
    super.ngOnInit();
    this.itemData = this.itemData.sort((a, b) => a.name.localeCompare(b.name));
  }
}
