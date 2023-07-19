import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'cb-equipment-choice',
  templateUrl: './equipment-choice.component.html',
  styleUrls: ['./equipment-choice.component.scss'],
})
export class EquipmentChoiceComponent {
  @Input() id: number;
  @Input() choice: any;
  @Input() items: any[];
  public choiceValue = undefined;

  constructor(private changeRef: ChangeDetectorRef) {}

  public updateChoice(choiceIndex: number) {
    this.choiceValue = choiceIndex;

    this.items.find((it: any) => it.id === this.id).items = [];

    const value = this.choice[this.choiceValue];
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      if (item.item) {
        this.items.find((it: any) => it.id === this.id).items[i] = {
          item: item.item,
          quantity: item.quantity,
        };
      }
    }

    this.changeRef.detectChanges();
  }
}
