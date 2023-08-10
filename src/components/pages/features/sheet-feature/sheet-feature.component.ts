import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sheet-feature',
  templateUrl: './sheet-feature.component.html',
  styleUrls: ['./sheet-feature.component.scss'],
})
export class SheetFeatureComponent {
  @Input() characterObj: any;

  @Input() feature: any;

  @Input() level = 0;

  @Input() characterLevel = 21;
  @Input() characterId;

  public isArray(array: any): boolean {
    return Array.isArray(array);
  }
}
