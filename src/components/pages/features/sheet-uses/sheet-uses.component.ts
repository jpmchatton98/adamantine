import { Component, Input, OnInit } from '@angular/core';
import { CharacterSheetService } from 'src/services/character-sheet.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-sheet-uses',
  templateUrl: './sheet-uses.component.html',
  styleUrls: ['./sheet-uses.component.scss'],
})
export class SheetUsesComponent implements OnInit {
  @Input() feature;
  @Input() characterObj;
  @Input() characterLevel;

  public maxUses = 0;

  constructor(
    private characterSheetService: CharacterSheetService,
    private dataService: DataService
  ) {}

  public ngOnInit(): void {
    let dataObj: any = this.dataService.getRace(this.characterObj.name);
    if (!dataObj) {
      dataObj = this.dataService.getClass(this.characterObj.name);
    }

    this.maxUses = this.characterSheetService.getMaxUsesById(
      dataObj,
      this.characterObj,
      this.feature.uses.id,
      this.characterLevel
    );
  }
}
