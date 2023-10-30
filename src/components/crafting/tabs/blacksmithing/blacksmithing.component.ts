import { Component } from '@angular/core';
import { CraftingTableDataService } from 'src/services/crafting-table-data.service';

@Component({
  selector: 'craft-blacksmithing',
  templateUrl: './blacksmithing.component.html',
  styleUrls: ['./blacksmithing.component.scss'],
})
export class BlacksmithingComponent {
  constructor(private dataService: CraftingTableDataService) {}

  public getTableData(section) {
    return this.dataService.getTableData('blacksmithing', section);
  }
}
