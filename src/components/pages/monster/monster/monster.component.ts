import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
})
export class MonsterComponent implements OnInit {
  @Input()
  set name(monsterName: string) {
    this.monster = this.dataService.getMonster(monsterName);
  }
  public monster: any;

  constructor(private dataService: DataService) {}

  private scoreKey = {
    str: 'Strength',
    dex: 'Dexterity',
    con: 'Constitution',
    int: 'Intelligence',
    wis: 'Wisdom',
    cha: 'Charisma',
  };

  public ngOnInit(): void {
    this.monster.ac = this.monster.ac
      .map((ac: any) => {
        if (ac.from && ac.condition) {
          return `${ac.ac} (${ac.from}, ${ac.condition})`;
        } else if (ac.from) {
          return `${ac.ac} (${ac.from})`;
        } else if (ac.condition) {
          return `${ac.ac} (${ac.condition})`;
        } else {
          return ac.toString();
        }
      })
      .join(', ');

    let speed = [];

    if (this.monster.speed.walk) {
      let speedString;

      if (this.monster.speed.walk.condition) {
        speedString = `${this.monster.speed.walk.number} ft. ${this.monster.speed.walk.condition}`;
      } else {
        speedString = `${this.monster.speed.walk} ft.`;
      }
      speed.push(speedString);
    } else {
      speed.push(`0 ft.`);
    }

    for (let [key, v] of Object.entries(this.monster.speed)) {
      const value: any = v;

      if (key !== 'walk' && key !== 'hover') {
        if (this.monster.speed.walk.condition) {
          speed.push(`${key} ${value.number} ft. ${value.condition}`);
        } else {
          speed.push(`${key} ${value} ft.`);
        }
      } else if (key === 'hover') {
        speed.push(`fly ${value} ft. (hover)`);
      }
    }

    this.monster.speed = speed.join(', ');

    if (this.monster.skill) {
      this.monster.skill = Object.entries(this.monster.skill)
        .map(([k, v]: any) => `${this.titleCase(k)} ${v}`)
        .join(', ');
    }
    if (this.monster.save) {
      this.monster.save = Object.entries(this.monster.save)
        .map(([k, v]: any) => `${this.scoreKey[k]} ${v}`)
        .join(', ');
    }
    if (this.monster.vulnerable) {
      this.monster.vulnerable = this.monster.vulnerable
        .map((d: any) => {
          if (d.note) {
            return `${this.toOxfordComma(d.vulnerable)} ${d.note}`;
          }
          return d;
        })
        .join(', ');
    }
    if (this.monster.resist) {
      this.monster.resist = this.monster.resist
        .map((d: any) => {
          if (d.note) {
            return `${this.toOxfordComma(d.resist)} ${d.note}`;
          }
          return d;
        })
        .join(', ');
    }
    if (this.monster.immune) {
      this.monster.immune = this.monster.immune
        .map((d: any) => {
          if (d.note) {
            return `${this.toOxfordComma(d.immune)} ${d.note}`;
          }
          return d;
        })
        .join(', ');
    }

    this.monster.senses = this.monster.senses?.join(', ') + ', ' ?? '';
    this.monster.senses += `passive Perception ${this.monster.passive}`;

    if (this.monster.spellcasting) {
      const spellcasting = this.monster.spellcasting[0];

      let spellString = '';
      if (spellcasting.spells) {
        for (let [level, s] of Object.entries(spellcasting.spells)) {
          const spells: any = s;

          switch (level) {
            case '0':
              spellString += `<div><strong>Cantrips (at will):</strong> ${spells.spells.join(
                ', '
              )}`;
              break;
            case '1':
              spellString += `<div><strong>1st-level (${spells.slots} slot${
                spells.slots > 1 ? 's' : ''
              }):</strong> ${spells.spells.join(', ')}`;
              break;
            case '1':
              spellString += `<div><strong>2nd-level (${spells.slots} slot${
                spells.slots > 1 ? 's' : ''
              }):</strong> ${spells.spells.join(', ')}`;
              break;
            case '1':
              spellString += `<div><strong>3rd-level (${spells.slots} slot${
                spells.slots > 1 ? 's' : ''
              }):</strong> ${spells.spells.join(', ')}`;
              break;
            default:
              spellString += `<div><strong>${level}th-level (${
                spells.slots
              } slot${
                spells.slots > 1 ? 's' : ''
              }):</strong> ${spells.spells.join(', ')}`;
              break;
          }
        }
      } else {
        if (spellcasting.will) {
          spellString += `<div><strong>At Will:</strong> ${spellcasting.will.join(
            ', '
          )}</div>`;
        }
        if (spellcasting.daily) {
          for (let [key, v] of Object.entries(spellcasting.daily)) {
            const value: any = v;
            spellString += `<div><strong>${key.charAt(
              0
            )}/day each:</strong> ${value.join(', ')}`;
          }
        }
      }

      this.monster.spellString = spellString;
    }
  }

  public modifier(score: number): string {
    let mod = Math.floor((score - 10) / 2);
    if (mod > 0) {
      return `+${mod}`;
    } else {
      return mod.toString();
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

  private titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== 'of') {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
    }
    return str.join(' ');
  }

  private toOxfordComma(array) {
    return array.length === 2
      ? array.join(' and ')
      : array.length > 2
      ? array
          .slice(0, array.length - 1)
          .concat(`and ${array.slice(-1)}`)
          .join(', ')
      : array.join(', ');
  }
}
