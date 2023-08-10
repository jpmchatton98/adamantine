import { Component, Input } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-sheet-listed',
  templateUrl: './sheet-listed.component.html',
  styleUrls: ['./sheet-listed.component.scss'],
})
export class SheetListedComponent {
  @Input() characterObj: any;

  @Input() listed: any;

  @Input() level = 0;

  @Input() characterLevel = 21;
  @Input() characterId;

  public genericKeys: string[] = [];
  public choiceValue: any;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.genericKeys = this.dataService.getGenericListKeys();
    this.choiceValue = this.getChoiceValue();
  }

  private getChoiceValue() {
    const choiceEntry = this.characterObj.choices.find(
      (c: any) => c.id === this.listed.id
    );
    if (choiceEntry) {
      if (this.genericKeys.includes(this.listed.type)) {
        return choiceEntry.list.map((l: string) =>
          this.dataService.getGenericListItem(this.listed.type, l)
        );
      } else if (
        ['spell', 'exploit', 'cantrip', 'language'].includes(this.listed.type)
      ) {
        return;
      }
    }
    return {
      name: '',
      description: 'No Choices Made',
    };
  }

  public isArray(array: any): boolean {
    return Array.isArray(array);
  }
}
