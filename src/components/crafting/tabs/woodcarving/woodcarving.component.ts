import { Component } from '@angular/core';
import { CraftingTableDataService } from 'src/services/crafting-table-data.service';

@Component({
  selector: 'craft-woodcarving',
  templateUrl: './woodcarving.component.html',
  styleUrls: ['./woodcarving.component.scss'],
})
export class WoodcarvingComponent {
  constructor(private dataService: CraftingTableDataService) {}

  public getTableData(section) {
    return this.dataService.getTableData('woodcarving', section);
  }
}
