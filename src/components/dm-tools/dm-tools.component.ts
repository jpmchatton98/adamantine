import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-dm-tools',
  templateUrl: './dm-tools.component.html',
  styleUrls: ['./dm-tools.component.scss'],
})
export class DmToolsComponent implements OnInit {
  public injuries;
  public surgeText = '';
  public injuryModal = false;
  public throwModal = false;

  public injuryCalcData = [
    {
      name: 'Acid',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Bludgeoning',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Cold',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Fire',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Force',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Lightning',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Necrotic',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Piercing',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Poison',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Psychic',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Radiant',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Slashing',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
    {
      name: 'Thunder',
      injuries: false,
      resist: false,
      vulnerable: false,
    },
  ];
  public siegeInjury = false;
  public conMod = 0;
  public resistInjuries = false;

  public generatedInjury;
  public extraInjuries = [];

  public throwerStr = 0;
  public throweeWeight = 0;
  public sizeMod = 1;

  public throwingDamage = 0;
  public throwingRange = 0;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.injuries = this.dataService.getInjuries();
  }

  public capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  public getRollRange(injury: any) {
    if (injury.minRoll === injury.maxRoll) {
      return injury.minRoll;
    }
    return `${injury.minRoll} - ${injury.maxRoll}`;
  }

  public wildMagicSurge() {
    this.surgeText = this.dataService.wildMagicSurge();
  }

  public canGenerate(): boolean {
    const injuryTypes = this.injuryCalcData.filter((t) => t.injuries === true);
    return !!injuryTypes.length;
  }
  public generateInjury(): void {
    const injuryTypes = this.injuryCalcData.filter((t) => t.injuries === true);
    if (injuryTypes.length) {
      const injuryType =
        injuryTypes[Math.floor(Math.random() * injuryTypes.length)];

      let val = Math.floor(Math.random() * 20) + 1;
      if (injuryType.resist) {
        let secondVal = Math.floor(Math.random() * 20) + 1;
        if (secondVal > val) {
          val = secondVal;
        }
      } else if (injuryType.vulnerable) {
        let secondVal = Math.floor(Math.random() * 20) + 1;
        if (secondVal < val) {
          val = secondVal;
        }
      }

      if (this.resistInjuries) {
        val += parseInt(this.conMod.toString());
      }

      if (this.siegeInjury) {
        this.generatedInjury = this.injuries
          .find((t) => t.type === 'siege')
          .list.find((i) => i.minRoll <= val && i.maxRoll >= val);
        this.extraInjuries = [];
        for (let i = 0; i < (this.generatedInjury.extraInjuries ?? 0); i++) {
          let extraVal = Math.floor(Math.random() * 20) + 1;
          if (injuryType.resist) {
            let secondExtraVal = Math.floor(Math.random() * 20) + 1;
            if (secondExtraVal > extraVal) {
              extraVal = secondExtraVal;
            }
          } else if (injuryType.vulnerable) {
            let secondExtraVal = Math.floor(Math.random() * 20) + 1;
            if (secondExtraVal < extraVal) {
              extraVal = secondExtraVal;
            }
          }

          if (this.resistInjuries) {
            extraVal += parseInt(this.conMod.toString());
          }

          let injury = this.injuries
            .find((t) => t.type === injuryType.name.toLowerCase())
            .list.find((i) => i.minRoll <= extraVal && i.maxRoll >= extraVal);
          if (injury.title !== 'No Injury') {
            this.extraInjuries.push(injury);
          }
        }
      } else {
        this.generatedInjury = this.injuries
          .find((t) => t.type === injuryType.name.toLowerCase())
          .list.find((i) => i.minRoll <= val && i.maxRoll >= val);
      }

      this.injuryModal = true;

      this.injuryCalcData.map((t) => (t.injuries = false));
    }
  }

  public canThrow(): boolean {
    let liftCapacity = this.throwerStr * 30 * this.sizeMod;
    return liftCapacity >= this.throweeWeight;
  }
  public calculateThrowing(): void {
    let liftCapacity = this.throwerStr * 30 * this.sizeMod;

    this.throwingDamage = Math.max(Math.floor(this.throweeWeight / 50), 1);
    this.throwingRange =
      Math.floor(((1 - this.throweeWeight / liftCapacity) * 80) / 5) * 5;

    this.throwModal = true;
  }
}
