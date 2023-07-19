import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'cb-equipment-item',
  templateUrl: './equipment-item.component.html',
  styleUrls: ['./equipment-item.component.scss'],
})
export class EquipmentItemComponent implements OnInit {
  @Input() id: number;
  @Input() subId: number;
  @Input() item: any;
  @Input() items: any[];
  public itemChoices: string[] = [];
  public choice: string = undefined;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    if (this.item.type) {
      this.itemChoices = this.dataService.getItemsByType(
        this.item.type,
        this.item.subType,
        this.item.tower
      );
    }
  }

  public updateChoice(): void {
    this.items.find((i: any) => i.id === this.id).items[this.subId] = {
      item: this.choice,
      quantity: this.item.quantity,
    };
  }
}
