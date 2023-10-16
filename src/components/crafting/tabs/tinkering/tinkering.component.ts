import { Component } from '@angular/core';
import { CraftingTableDataService } from 'src/services/crafting-table-data.service';

@Component({
  selector: 'craft-tinkering',
  templateUrl: './tinkering.component.html',
  styleUrls: ['./tinkering.component.scss'],
})
export class TinkeringComponent {
  constructor(private dataService: CraftingTableDataService) {}

  public getTableData(section) {
    return this.dataService.getTableData('tinkering', section);
  }
}
