import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { GeneralStoreService } from 'src/services/general-store.service';

@Component({
  selector: 'app-magic-item',
  templateUrl: './magic-item.component.html',
  styleUrls: ['./magic-item.component.scss'],
})
export class MagicItemComponent extends BaseComponent {
  @Input()
  set item(itemName: string) {
    this.itemData = this.generalStoreService.getMagicItem(itemName);
    this.pageTitle = this.itemData.name;
  }
  public rarities = [
    'common',
    'uncommon',
    'rare',
    'very rare',
    'legendary',
    'artifact',
  ];

  public itemData: any;

  constructor(private generalStoreService: GeneralStoreService) {
    super();
  }
}
