import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from 'src/components/pages/features/builder.actions';
import { selectUpdate } from 'src/components/pages/features/builder.selectors';
import { DataService } from 'src/services/data.service';
import { GeneralStoreService } from 'src/services/general-store.service';

@Component({
  selector: 'cb-equipment-tab',
  templateUrl: './equipment-tab.component.html',
  styleUrls: ['./equipment-tab.component.scss'],
})
export class EquipmentTabComponent implements OnInit {
  @Input() character: any;
  @Input() characterId: string;

  public items = [];
  public equipment = [];

  public init: boolean = false;

  constructor(
    private dataService: DataService,
    private generalStoreService: GeneralStoreService,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.store.select(selectUpdate).subscribe((update) => {
      this.generateEquipment();
    });
  }

  private generateEquipment(): void {
    this.equipment = [];

    if (this.character.classes?.length) {
      const classData = this.dataService.getClass(
        this.character.classes[0].name
      );

      for (let e of classData.equipment) {
        let i = classData.equipment.findIndex((eq: any) => eq === e);
        const equipData: any = {};
        if (e.length === 1) {
          equipData.type = 'fixed';
          equipData.items = e[0];

          this.items.push({
            id: i,
            items: e[0].map((i: any) => {
              return { item: i.item, quantity: i.quantity };
            }),
          });
        } else {
          equipData.type = 'choice';
          equipData.choices = e;

          this.items.push({ id: i, items: [] });
        }

        this.equipment.push(equipData);
      }
    }
  }

  public addEquipment() {
    this.init = false;

    if (!this.character.equipment) {
      this.character.equipment = {
        items: [],
        currency: {},
      };
    }

    for (let itemGroup of this.items) {
      for (let item of itemGroup.items) {
        this.addItem(item);
      }
    }

    let gold = 50;
    if (this.character.classes[0].name === 'demi-dragon') {
      const roll1 = Math.floor(Math.random() * 4) + 1;
      const roll2 = Math.floor(Math.random() * 4) + 1;

      gold += (roll1 + roll2) * 5;
    }

    if (!this.character.equipment.currency) {
      this.character.equipment.currency = {
        pp: 0,
        gp: 0,
        sp: 0,
        cp: 0,
      };
    }

    this.character.equipment.currency.gp = gold;

    this.character.equipment.other = this.generalStoreService.getTrinket();

    this.store.dispatch(new Update());
  }

  private addItem(item: any): void {
    if (!this.character.equipment.items) {
      this.character.equipment.items = [];
    }

    const itemName = item.item.toLowerCase();

    const existingIndex = this.character.equipment.items.findIndex(
      (e: any) => e.item.toLowerCase() === itemName
    );

    if (existingIndex !== -1) {
      this.character.equipment.items[existingIndex].quantity += item.quantity;
    } else {
      if (this.dataService.isEquipmentPack(itemName)) {
        for (let subItem of this.dataService.getEquipmentPackContents(
          itemName
        )) {
          this.addItem(subItem);
        }
      } else {
        this.character.equipment.items.push({
          item: itemName,
          quantity: item.quantity,
        });
      }
    }
  }
}
