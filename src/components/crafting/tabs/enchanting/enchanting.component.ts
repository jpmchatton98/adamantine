import { Component } from '@angular/core';
import { CraftingTableDataService } from 'src/services/crafting-table-data.service';

@Component({
  selector: 'craft-enchanting',
  templateUrl: './enchanting.component.html',
  styleUrls: ['./enchanting.component.scss'],
})
export class EnchantingComponent {
  constructor(private dataService: CraftingTableDataService) {}

  public getTableData(section) {
    return this.dataService.getTableData('enchanting', section);
  }
}
