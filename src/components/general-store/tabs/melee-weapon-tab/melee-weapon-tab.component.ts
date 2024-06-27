import { Component, OnInit } from '@angular/core';
import { BaseTabComponent } from '../base-tab/base-tab.component';

@Component({
  selector: 'gs-melee-weapon-tab',
  templateUrl: './melee-weapon-tab.component.html',
  styleUrls: ['./melee-weapon-tab.component.scss'],
})
export class MeleeWeaponTabComponent
  extends BaseTabComponent
  implements OnInit
{
  public override ngOnInit(): void {
    super.ngOnInit();
    this.itemData = this.itemData.sort((a, b) => a.name.localeCompare(b.name));
  }
}
