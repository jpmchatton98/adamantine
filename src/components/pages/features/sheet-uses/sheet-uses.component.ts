import { Component, Input, OnInit } from '@angular/core';
import { CharacterSheetService } from 'src/services/character-sheet.service';

@Component({
  selector: 'app-sheet-uses',
  templateUrl: './sheet-uses.component.html',
  styleUrls: ['./sheet-uses.component.scss'],
})
export class SheetUsesComponent implements OnInit {
  @Input() feature;
  @Input() characterObj;
  @Input() characterLevel;

  constructor(private characterSheetService: CharacterSheetService) {}

  public ngOnInit(): void {
    switch (this.feature.uses.type) {
      case 'derived':
        break;
      case 'level':
        break;
      case 'fixed':
        break;
    }
  }
}
