import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-bestiary',
  templateUrl: './bestiary.component.html',
  styleUrls: ['./bestiary.component.scss'],
})
export class BestiaryComponent implements OnInit {
  private allMonsters: any[] = [];
  public monsters: any[] = [];

  public monsterTags: string[] = [];
  public crMarks: any[] = [];
  public sizeMarks: any[] = [];

  private sizeIndex = {
    Fine: -4,
    Diminutive: -3,
    Tiny: -2,
    Small: -1,
    Medium: 0,
    Large: 1,
    Huge: 2,
    Gargantuan: 3,
    Titanic: 4,
    Colossal: 5,
    Kaiju: 6,
  };

  public filters = {
    search: '',
    type: {
      aberration: false,
      beast: false,
      celestial: false,
      construct: false,
      dragon: false,
      elemental: false,
      fey: false,
      fiend: false,
      giant: false,
      humanoid: false,
      ooze: false,
      plant: false,
      undead: false,
    },
    size: [-4, 6],
    tags: [],
    cr: [0, 43],
  };

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.allMonsters = this.dataService.getMonsters();

    for (let [key, value] of Object.entries(this.sizeIndex)) {
      this.sizeMarks[value] = key;
    }

    for (let monster of this.allMonsters) {
      if (monster.tags) {
        this.monsterTags = [...this.monsterTags, ...monster.tags];
      }
      if (monster.beastType) {
        this.monsterTags = [...this.monsterTags, ...monster.beastType];
      }
    }
    this.monsterTags.push('familiar', 'steed', 'great steed', 'mythic');
    this.monsterTags = [...new Set(this.monsterTags.sort())];

    for (let cr of [...new Set(this.allMonsters.map((m: any) => m.cr))].sort(
      (a, b) => a - b
    )) {
      this.crMarks[this.crKey(cr)] = this.formatCr(cr);
    }

    this.updateFilters();
  }

  public updateFilters(): void {
    this.monsters = this.allMonsters.filter((m: any) =>
      m.name.toLowerCase().includes(this.filters.search.toLowerCase())
    );

    if (!Object.values(this.filters.type).every((k: any) => !k)) {
      this.monsters = this.monsters.filter((m: any) => {
        if (m.type.includes(' ')) {
          for (let type of m.type.split(' ')) {
            let hasType = this.filters.type[type];
            if (hasType) {
              return true;
            }
          }
        } else {
          return this.filters.type[m.type];
        }
      });
    }
    this.monsters = this.monsters.filter((m: any) => {
      if (m.size.includes(' ')) {
        for (let size of m.size.split(' ')) {
          size = size
            .replaceAll(',', '')
            .replaceAll('or', '')
            .replaceAll(' ', '');
          if (
            this.sizeIndex[size] >= this.filters.size[0] &&
            this.sizeIndex[size] <= this.filters.size[1]
          ) {
            return true;
          }
        }
        return false;
      } else {
        if (m.type.includes('beast')) {
          return (
            (this.sizeIndex[m.size] >= this.filters.size[0] &&
              this.sizeIndex[m.size] <= this.filters.size[1]) ||
            (this.sizeIndex[this.getDireSize(m.size)] >= this.filters.size[0] &&
              this.sizeIndex[this.getDireSize(m.size)] <= this.filters.size[1])
          );
        } else {
          return (
            this.sizeIndex[m.size] >= this.filters.size[0] &&
            this.sizeIndex[m.size] <= this.filters.size[1]
          );
        }
      }
    });
    if (this.filters.tags.length) {
      this.monsters = this.monsters.filter((m: any) => {
        if (this.filters.tags.includes('mythic')) {
          if (m.mythic) {
            return true;
          }
        }

        if (!m.tags && !m.beastType) {
          return false;
        }

        for (let tag of m.tags ?? []) {
          if (this.filters.tags.includes(tag)) {
            return true;
          }
        }
        for (let type of m.beastType ?? []) {
          if (this.filters.tags.includes(type)) {
            return true;
          }
        }

        if (this.filters.tags.includes('familiar') && m.familiar) {
          return true;
        }
        if (this.filters.tags.includes('steed') && m.steed) {
          return true;
        }
        if (
          this.filters.tags.includes('great steed') &&
          (m.steed || m.greatSteed)
        ) {
          return true;
        }
        return false;
      });
    }
    this.monsters = this.monsters.filter((m: any) => {
      if (m.type.includes('beast')) {
        return (
          (m.cr >= this.crDecode(this.filters.cr[0]) &&
            m.cr <= this.crDecode(this.filters.cr[1])) ||
          (Math.round(m.cr + 2) >= this.crDecode(this.filters.cr[0]) &&
            Math.round(m.cr + 2) <= this.crDecode(this.filters.cr[1]))
        );
      } else {
        return (
          m.cr >= this.crDecode(this.filters.cr[0]) &&
          m.cr <= this.crDecode(this.filters.cr[1])
        );
      }
    });
  }

  public crKey(cr: number): number {
    switch (cr) {
      case 0:
        return 0;
      case 0.125:
        return 1;
      case 0.25:
        return 2;
      case 0.5:
        return 3;
      default:
        return cr + 3;
    }
  }
  public crDecode(cr: number): number {
    switch (cr) {
      case 0:
        return 0;
      case 1:
        return 0.125;
      case 2:
        return 0.25;
      case 3:
        return 0.5;
      default:
        return cr - 3;
    }
  }

  public formatCr(cr: number): string {
    switch (cr) {
      case 0.125:
        return '⅛';
      case 0.25:
        return '¼';
      case 0.5:
        return '½';
      default:
        return cr.toString();
    }
  }
  public formatCrSlider(cr: number): string {
    switch (cr) {
      case 0:
        return '0';
      case 1:
        return '⅛';
      case 2:
        return '¼';
      case 3:
        return '½';
      default:
        return (cr - 3).toString();
    }
  }

  public formatSizeSlider(sizeId: number): string {
    return Object.keys(this.sizeIndex).find(
      (key) => this.sizeIndex[key] === sizeId
    );
  }

  public getDireSize(size: string): string {
    const index = this.sizeIndex[size];
    return Object.keys(this.sizeIndex).find(
      (key) => this.sizeIndex[key] === index + 1
    );
  }
  public round(number) {
    return Math.round(number);
  }
}
