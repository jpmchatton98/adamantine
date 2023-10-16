import { Component, Input } from '@angular/core';

@Component({
  selector: 'craft-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data: any[];
  private rarityLookup = [
    'Common',
    'Uncommon',
    'Rare',
    'Very Rare',
    'Legendary',
  ];

  public getRarity(rarityIndex) {
    return this.rarityLookup[rarityIndex];
  }

  public formatCost(cost: number): string {
    cost = parseFloat(cost.toFixed(4));

    if (!cost) {
      return '-';
    }

    if (cost < 0.1 || (cost * 100) % 10 !== 0) {
      return `${cost * 100} cp`;
    } else if (cost < 1 || (cost * 10) % 10 !== 0) {
      return `${cost * 10} sp`;
    } else {
      return `${cost} gp`;
    }
  }
}
