import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet-feature',
  templateUrl: './sheet-feature.component.html',
  styleUrls: ['./sheet-feature.component.scss'],
})
export class SheetFeatureComponent implements OnInit {
  @Input() characterObj: any;

  @Input() feature: any;

  @Input() level = 0;

  @Input() characterLevel = 21;
  @Input() characterId;

  public featureUses;

  public ngOnInit(): void {
    if (this.feature.uses && Array.isArray(this.feature.uses)) {
      this.featureUses = this.feature.uses.filter((value, index) => {
        const id = value.id;
        return (
          index ===
          this.feature.uses.findIndex((obj) => {
            return obj.id === id;
          })
        );
      });
    }
  }

  public isArray(array: any): boolean {
    return Array.isArray(array);
  }
}
