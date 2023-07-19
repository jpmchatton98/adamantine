import { Component, Input } from '@angular/core';
import { GeneralStoreService } from 'src/services/general-store.service';

@Component({
  selector: 'app-magic-item',
  templateUrl: './magic-item.component.html',
  styleUrls: ['./magic-item.component.scss'],
})
export class MagicItemComponent {
  @Input()
  set item(itemName: string) {
    this.itemData = this.generalStoreService.getMagicItem(itemName);
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

  constructor(private generalStoreService: GeneralStoreService) {}

  public capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
}
