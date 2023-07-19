import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from 'src/components/pages/features/builder.actions';
import { CharacterSheetService } from 'src/services/character-sheet.service';
import { DataService } from 'src/services/data.service';
import { GeneralStoreService } from 'src/services/general-store.service';

@Component({
  selector: 'cs-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  @Input() equipment: any;
  public equipmentData: any[] = [];

  public modalVisible;
  public modalOption;

  public totalWeight = 0;

  public currencyModal = false;
  public currency = {
    pp: undefined,
    gp: undefined,
    sp: undefined,
    cp: undefined,
  };

  public equipmentAddModal = false;

  public allItems = [];
  public searchedItems = [];
  public search = '';

  constructor(
    private characterSheetService: CharacterSheetService,
    private generalStoreService: GeneralStoreService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.allItems = this.generalStoreService.allItems;
    this.searchedItems = this.allItems;
    this.generateItems();
  }

  public generateItems() {
    this.equipmentData = [];

    for (let e of this.equipment?.items?.sort((a, b) =>
      a.item.localeCompare(b.item)
    ) ?? []) {
      const itemData = this.generalStoreService.getItem(e.item);
      this.equipmentData.push(itemData);

      this.totalWeight += (itemData.weight ?? 0) * e.quantity;
    }

    this.equipmentData = this.equipmentData.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    let totalCoins = 0;
    for (let amount of Object.values(this.equipment.currency)) {
      totalCoins += parseInt(amount.toString());
    }

    this.totalWeight += totalCoins / 50;
    this.totalWeight = parseFloat(this.totalWeight.toFixed(4));
  }

  public formatCost(cost: number): string {
    if (!cost) {
      return '-';
    }

    cost = parseFloat(cost.toFixed(4));

    if (cost < 0.1 || (cost * 100) % 10 !== 0 || (cost * 10) % 10 !== 0) {
      return `${cost * 100} cp`;
    } else if (cost < 1 || (cost * 10) % 10 !== 0) {
      return `${cost * 10} sp`;
    } else if (cost < 10000 || cost % 10 !== 0) {
      return `${cost} gp`;
    } else {
      return `${cost / 10} pp`;
    }
  }

  public formatWeight(weight: number): string {
    if (!weight) {
      return '-';
    }

    weight = parseFloat(weight.toFixed(4));

    if (weight >= 2000) {
      return `${weight / 2000} ton${weight !== 2000 ? 's' : ''}`;
    } else {
      return `${weight} lb${weight !== 1 ? 's' : ''}`;
    }
  }

  public totalCurrencyInGp(): number {
    return (
      this.equipment.currency.pp * 10 +
      this.equipment.currency.gp +
      this.equipment.currency.sp / 10 +
      this.equipment.currency.cp / 100
    );
  }
  public totalCurrencyInGpLocal(): number {
    return (
      this.currency.pp * 10 +
      this.currency.gp +
      this.currency.sp / 10 +
      this.currency.cp / 100
    );
  }
  public addCurrency(amount: number): void {
    const amountString = amount.toString();

    const gp = Math.floor(amount);
    this.equipment.currency.gp += gp;
    if (gp !== amount) {
      const sp = parseInt(amountString.split('.')[1].charAt(0));
      const cp = parseInt(amountString.split('.')[1].charAt(1));

      this.equipment.currency.sp += sp;
      this.equipment.currency.cp += cp;
    }

    this.equipmentUpdated();
  }
  public removeCurrency(amount: number): void {
    if (amount >= this.totalCurrencyInGp()) {
      const amountString = amount.toString();
      const gp = Math.floor(amount);
      this.equipment.currency.gp -= gp;
      if (gp !== amount) {
        const sp = parseInt(amountString.split('.')[1].charAt(0));
        const cp = parseInt(amountString.split('.')[1].charAt(1));

        this.equipment.currency.sp -= sp;
        this.equipment.currency.cp -= cp;
      }

      while (
        Object.values(this.equipment.currency).findIndex(
          (v: number) => v !== undefined && v < 0
        ) !== -1
      ) {
        if (this.equipment.currency.gp < 0) {
          if (this.equipment.currency.pp > 0) {
            this.equipment.currency.pp -= 1;
            this.equipment.currency.gp += 10;
          } else if (this.equipment.currency.sp >= 10) {
            this.equipment.currency.gp += 1;
            this.equipment.currency.sp -= 10;
          } else if (this.equipment.currency.cp >= 100) {
            this.equipment.currency.gp += 1;
            this.equipment.currency.cp -= 100;
          }
        }
        if (this.equipment.currency.sp < 0) {
          if (this.currency.gp > 0) {
            this.equipment.currency.gp -= 1;
            this.equipment.currency.sp += 10;
          } else if (this.equipment.currency.cp >= 100) {
            this.equipment.currency.gp += 1;
            this.equipment.currency.cp -= 100;
          }
        }
        if (this.equipment.currency.cp < 0) {
          if (this.currency.sp > 0) {
            this.equipment.currency.sp -= 1;
            this.equipment.currency.cp += 10;
          } else {
            break;
          }
        }
      }

      this.equipmentUpdated();
    }
  }
  public updateCurrencyAdd() {
    if (this.equipment.currency.pp === undefined) {
      this.equipment.currency.pp = 0;
    }
    if (this.equipment.currency.gp === undefined) {
      this.equipment.currency.gp = 0;
    }
    if (this.equipment.currency.sp === undefined) {
      this.equipment.currency.sp = 0;
    }
    if (this.equipment.currency.cp === undefined) {
      this.equipment.currency.cp = 0;
    }

    this.equipment.currency.pp += parseInt(
      this.currency.pp ? this.currency.pp : '0'
    );
    this.equipment.currency.gp += parseInt(
      this.currency.gp ? this.currency.gp : '0'
    );
    this.equipment.currency.sp += parseInt(
      this.currency.sp ? this.currency.sp : '0'
    );
    this.equipment.currency.cp += parseInt(
      this.currency.cp ? this.currency.cp : '0'
    );

    this.currency.pp = undefined;
    this.currency.gp = undefined;
    this.currency.sp = undefined;
    this.currency.cp = undefined;

    this.equipmentUpdated();
  }
  public updateCurrencyRemove() {
    if (this.equipment.currency.pp === undefined) {
      this.equipment.currency.pp = 0;
    }
    if (this.equipment.currency.gp === undefined) {
      this.equipment.currency.gp = 0;
    }
    if (this.equipment.currency.sp === undefined) {
      this.equipment.currency.sp = 0;
    }
    if (this.equipment.currency.cp === undefined) {
      this.equipment.currency.cp = 0;
    }

    this.equipment.currency.pp -= parseInt(
      this.currency.pp && this.equipment.currency.pp > 0
        ? this.currency.pp
        : '0'
    );
    this.equipment.currency.gp -= parseInt(
      this.currency.gp &&
        (this.equipment.currency.gp > 0 || this.equipment.currency.pp > 0)
        ? this.currency.gp
        : '0'
    );
    this.equipment.currency.sp -= parseInt(
      this.currency.sp &&
        (this.equipment.currency.sp > 0 ||
          this.equipment.currency.gp > 0 ||
          this.equipment.currency.pp > 0)
        ? this.currency.sp
        : '0'
    );
    this.equipment.currency.cp -= parseInt(
      this.currency.cp &&
        (this.equipment.currency.cp > 0 ||
          this.equipment.currency.sp > 0 ||
          this.equipment.currency.gp > 0 ||
          this.equipment.currency.pp > 0)
        ? this.currency.cp
        : '0'
    );

    this.currency.pp = undefined;
    this.currency.gp = undefined;
    this.currency.sp = undefined;
    this.currency.cp = undefined;

    this.equipmentUpdated();

    while (
      Object.values(this.equipment.currency).findIndex(
        (v: number) => v !== undefined && v < 0
      ) !== -1
    ) {
      if (this.equipment.currency.gp < 0) {
        if (this.equipment.currency.pp > 0) {
          this.equipment.currency.pp -= 1;
          this.equipment.currency.gp += 10;
        } else if (this.equipment.currency.sp >= 10) {
          this.equipment.currency.gp += 1;
          this.equipment.currency.sp -= 10;
        } else if (this.equipment.currency.cp >= 100) {
          this.equipment.currency.gp += 1;
          this.equipment.currency.cp -= 100;
        }
      }
      if (this.equipment.currency.sp < 0) {
        if (this.currency.gp > 0) {
          this.equipment.currency.gp -= 1;
          this.equipment.currency.sp += 10;
        } else if (this.equipment.currency.cp >= 100) {
          this.equipment.currency.gp += 1;
          this.equipment.currency.cp -= 100;
        }
      }
      if (this.equipment.currency.cp < 0) {
        if (this.currency.sp > 0) {
          this.equipment.currency.sp -= 1;
          this.equipment.currency.cp += 10;
        } else {
          break;
        }
      }
    }

    this.equipmentUpdated();
  }

  public equipmentUpdated() {
    if (this.equipment.currency.pp !== undefined) {
      this.equipment.currency.pp = parseInt(
        this.equipment.currency.pp.toString()
      );
    }
    if (this.equipment.currency.gp !== undefined) {
      this.equipment.currency.gp = parseInt(
        this.equipment.currency.gp.toString()
      );
    }
    if (this.equipment.currency.sp !== undefined) {
      this.equipment.currency.sp = parseInt(
        this.equipment.currency.sp.toString()
      );
    }
    if (this.equipment.currency.cp !== undefined) {
      this.equipment.currency.cp = parseInt(
        this.equipment.currency.cp.toString()
      );
    }

    this.store.dispatch(new Update());
  }

  public addItem(itemName: string, itemCost: number = 0): void {
    if (itemCost) {
      this.removeCurrency(itemCost);
    }

    const itemData = this.generalStoreService.getItem(itemName);
    if (!itemData?.contentsSheet) {
      const itemEntry = this.equipment.items.find(
        (i: any) => i.item.toLowerCase() === itemName.toLowerCase()
      );
      if (itemEntry) {
        itemEntry.quantity++;
      } else {
        this.equipment.items.push({
          item: itemName.toLowerCase(),
          quantity: 1,
        });
      }
    } else {
      for (let item of itemData.contentsSheet) {
        for (let i = 0; i < item.quantity; i++) {
          this.addItem(item.item);
        }
      }
    }

    this.generateItems();
    this.equipmentUpdated();

    this.search = '';
    this.searchedItems = this.allItems;
    this.equipmentAddModal = false;
  }
  public searchItems() {
    this.searchedItems = this.allItems.filter(
      (i: any) =>
        i.name.toLowerCase().includes(this.search.toLowerCase()) ||
        this.getItemType(i.name)
          .toLowerCase()
          .includes(this.search.toLowerCase())
    );
  }

  public getItemType(name) {
    return this.generalStoreService.getItemType(name);
  }
}
