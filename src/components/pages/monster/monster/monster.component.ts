import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { HttpParams } from '@angular/common/http';
import { BaseComponent } from 'src/components/meta/base/base.component';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
})
export class MonsterComponent extends BaseComponent implements OnInit {
  @Input()
  set name(monsterName: string) {
    this.monster = this.dataService.getMonster(monsterName);
    // this.monster = JSON.parse(JSON.stringify(this.data));

    this.pageTitle = this.monster.name;
  }
  public data: any;
  public monster: any;

  public settingsModal: boolean = false;

  public direBeast: boolean = false;
  public direMonster: any;

  public undead: string = '';
  public undeadMonster = {
    ghost: null,
    mummy: null,
    skeleton: null,
    zombie: null,
  };
  private undeadMods = {
    ghost: {
      resist: [
        'acid',
        'fire',
        'lightning',
        'thunder',
        'bludgeoning, piercing, and slashing damage from nonmagical attacks',
      ],
      immune: ['cold', 'necrotic', 'poison'],
      conditionImmune: [
        'charmed',
        'exhaustion',
        'frightened',
        'grappled',
        'paralyzed',
        'petrified',
        'poisoned',
        'prone',
        'restrained',
      ],
      trait: [
        {
          name: 'Ethereal Sight',
          entries: [
            'The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa.',
          ],
        },
        {
          name: 'Incorporeal Movement',
          entries: [
            'The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.',
          ],
        },
      ],
      action: [
        {
          name: 'Etherealness',
          entries: [
            "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane.",
          ],
        },
      ],
    },
    mummy: {
      vulnerable: ['fire'],
      resist: [
        'bludgeoning, piercing, and slashing damage from nonmagical attacks',
      ],
      immune: ['necrotic', 'poison'],
      conditionImmune: [
        'charmed',
        'exhaustion',
        'frightened',
        'paralyzed',
        'poisoned',
      ],
      trait: [
        {
          name: 'Mummy Rot',
          entries: [
            "Whenever the mummy hits a creature with a melee attack, the target must succeed on a DC 13 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
          ],
        },
      ],
    },
    skeleton: {
      vulnerable: ['bludgeoning'],
      immune: ['poison'],
      conditionImmune: ['exhaustion', 'poisoned'],
    },
    zombie: {
      conditionImmune: ['exhaustion', 'poisoned'],
      trait: [
        {
          name: 'Undead Fortitude',
          entries: [
            'If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.',
          ],
        },
      ],
    },
  };

  public acString: string = '';
  public hpString: string = '';
  public speedString: string = '';

  public saveString: string = '';
  public skillString: string = '';
  public senseString: string = '';

  constructor(private dataService: DataService) {
    super();
  }

  private scoreKey = {
    str: 'Strength',
    dex: 'Dexterity',
    con: 'Constitution',
    int: 'Intelligence',
    wis: 'Wisdom',
    cha: 'Charisma',
  };

  public sizes = [
    'Fine',
    'Diminutive',
    'Tiny',
    'Small',
    'Medium',
    'Large',
    'Huge',
    'Gargantuan',
    'Titanic',
    'Colossal',
    'Kaiju',
  ];

  public override ngOnInit(): void {
    this.acString = this.monster.ac
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
    const hitDice = parseInt(this.monster.hp.formula.split('d')[0].trim());
    const hitDie = parseInt(
      this.monster.hp.formula.split('d')[1].split('+')[0].trim()
    );
    const conMod = Math.floor((this.monster.con - 10) / 2);

    this.hpString = `${
      (hitDie / 2 + conMod) * hitDice
    } (${hitDice}d${hitDie} + ${conMod * hitDice})`;

    let speed = [];

    if (this.monster.speed.walk) {
      let speedString;

      if (this.monster.speed.walk?.condition) {
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
        if (this.monster.speed.walk?.condition) {
          speed.push(`${key} ${value.number} ft. ${value.condition}`);
        } else {
          speed.push(`${key} ${value} ft.`);
        }
      } else if (key === 'hover') {
        speed.push(`fly ${value} ft. (hover)`);
      }
    }

    this.speedString = speed.join(', ');

    if (this.monster.skill) {
      this.skillString = Object.entries(this.monster.skill)
        .map(([k, v]: any) => `${this.titleCase(k)} ${v}`)
        .join(', ');
    }
    if (this.monster.save) {
      this.saveString = Object.entries(this.monster.save)
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

    if (this.monster.senses) {
      this.senseString = this.monster.senses?.join(', ') + ', ' ?? '';
    }
    this.senseString += `passive Perception ${this.monster.passive}`;

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

    // const urlParams = new URLSearchParams(window.location.search);
    // if (urlParams.get('dire') === '1') {
    //   this.direBeast = true;
    //   this.updateDireBeast();
    // } else {
    //   this.direBeast = false;
    //   this.updateDireBeast();
    // }

    // if (urlParams.get('undead')) {
    //   this.undead = urlParams.get('undead');
    //   this.updateUndead();
    // } else {
    //   this.undead = undefined;
    //   this.updateUndead();
    // }

    super.ngOnInit();
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
    let crString = '';

    switch (cr) {
      case 0.125:
        crString = '⅛';
      case 0.25:
        crString = '¼';
      case 0.5:
        crString = '½';
      default:
        crString = cr.toString();
    }

    if (this.monster.minion) {
      return `M${crString}`;
    }
    return crString;
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

  public getLegendaryActionsHeader() {
    return `${this.capitalize(
      this.monster.shortName ?? this.monster.name
    )} can take ${
      this.monster.mythic ? '5' : '3'
    } legendary actions choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn.  ${this.capitalize(
      this.monster.shortName ?? this.monster.name
    )} regains spent legendary actions at the start of ${
      this.monster.pronouns ? this.monster.pronouns[2] : 'its'
    } turn.`;
  }
  public getMythicActionsHeader() {
    return `If ${this.monster.shortName ?? this.monster.name} has used ${
      this.monster.pronouns ? this.monster.pronouns[2] : 'its'
    } Mythic trait in the last hour, ${
      this.monster.pronouns ? this.monster.pronouns[0] : 'it'
    } can use the options below as legendary actions.`;
  }
}
