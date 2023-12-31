import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
})
export class MonsterComponent implements OnInit {
  @Input()
  set name(monsterName: string) {
    this.data = this.dataService.getMonster(monsterName);
    this.monster = JSON.parse(JSON.stringify(this.data));
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

  constructor(private dataService: DataService) {}

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

  public ngOnInit(): void {
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

  // public updateDireBeast() {
  //   this.undead = undefined;

  //   let currentUrl = window.location.href;
  //   currentUrl = currentUrl.split('?')[0];

  //   window.history.replaceState(
  //     {},
  //     '',
  //     currentUrl + `?dire=${this.direBeast ? '1' : '0'}&undead=${this.undead}`
  //   );

  //   if (this.direBeast) {
  //     if (this.direMonster) {
  //       this.monster = this.direMonster;
  //     } else {
  //       this.direMonster = JSON.parse(JSON.stringify(this.monster));

  //       this.direMonster.name = `Dire ${this.direMonster.name}`;

  //       this.direMonster.ac.forEach((ac) => {
  //         if (ac.ac) {
  //           ac.ac += 1;
  //         } else {
  //           ac += 1;
  //         }
  //       });

  //       this.direMonster.str = Math.max(12, this.direMonster.str + 2);
  //       this.direMonster.con += 2;

  //       const hitDice = parseInt(this.monster.hp.formula.split('d')[0].trim());
  //       const hitDie = parseInt(
  //         this.monster.hp.formula.split('d')[1].split('+')[0].trim()
  //       );
  //       const conMod = Math.floor((this.monster.con - 10) / 2);

  //       if (this.direMonster.action) {
  //         this.direMonster.action = this.direMonster.action.map((action) => {
  //           action.entries = action.entries.map((entry) => {
  //             if (entry.includes('Attack')) {
  //               entry = entry.replace(
  //                 /(?<=\+)([0-9]+)(?= to hit)/,
  //                 function ($0, $1) {
  //                   return parseInt($1) + 1;
  //                 }
  //               );
  //               entry = entry.replace(
  //                 /(?<=\()([0-9]+)d([0-9]+)/g,
  //                 function ($0, $1, $2) {
  //                   return (
  //                     parseInt($1) +
  //                     1 +
  //                     'd' +
  //                     Math.min(parseInt($2) + 2, 12).toString()
  //                   );
  //                 }
  //               );
  //               entry = entry.replace(
  //                 /(?<=\+ )([0-9]+)(?=\))/g,
  //                 function ($0, $1) {
  //                   return parseInt($1) + 2;
  //                 }
  //               );
  //               entry = entry.replace(/\- ([0-9]+)(?=\))/g, function ($0, $1) {
  //                 const mod = parseInt($1) * -1 + 2;
  //                 if (mod < 0) {
  //                   return `- ${Math.abs(mod)}`;
  //                 } else if (mod > 0) {
  //                   return `+ ${mod}`;
  //                 }
  //               });

  //               entry = entry.replace(
  //                 /([0-9]+)( \([0-9]+d[0-9]+(?: \+ [0-9]+)?)/g,
  //                 function ($0, $1, $2) {
  //                   const dice = parseInt(
  //                     $2
  //                       .split('d')[0]
  //                       .replace(/[\(\)]/, '')
  //                       .trim()
  //                   );
  //                   const die = parseInt(
  //                     $2
  //                       .split('d')[1]
  //                       .split('+')[0]
  //                       .replace(/[\(\)]/, '')
  //                       .trim()
  //                   );

  //                   let mod = 0;
  //                   if ($2.includes('+')) {
  //                     mod = parseInt(
  //                       $2
  //                         .split('+')[1]
  //                         .replace(/[\(\)]/, '')
  //                         .trim()
  //                     );
  //                   }

  //                   return `${(die / 2 + 1) * dice + mod}${$2}`;
  //                 }
  //               );

  //               entry = entry.replace(
  //                 '<em>Hit:</em> 1 ',
  //                 '<em>Hit:</em> 5 (1d4 + 2) '
  //               );
  //             }

  //             if (entry.includes('DC')) {
  //               entry = entry.replace(/(?<=DC )[0-9]+/g, function ($0) {
  //                 return parseInt($0) + 1;
  //               });
  //             }

  //             return entry;
  //           });

  //           return action;
  //         });
  //       }

  //       this.direMonster.hp.formula = `${hitDice + 3}d${hitDie + 2} + ${
  //         conMod * hitDice
  //       }`;

  //       this.direMonster.cr = Math.round(this.direMonster.cr + 2);

  //       for (let speed of Object.keys(this.direMonster.speed)) {
  //         if (this.direMonster.speed[speed] !== 0) {
  //           this.direMonster.speed[speed] += 10;
  //         }
  //       }
  //       if (this.direMonster.skill) {
  //         if (this.direMonster.skill['Athletics']) {
  //           const prof =
  //             parseInt(this.direMonster.skill['Athletics'].replace('+', '')) -
  //             Math.floor((this.monster.str - 10) / 2);
  //           this.direMonster.skill['Athletics'] = `+${
  //             prof + Math.floor((this.direMonster.str - 10) / 2)
  //           }`;
  //         }
  //         if (this.direMonster.skill['con']) {
  //           this.direMonster.save['Endurance'] =
  //             '+' +
  //             parseInt(this.direMonster.skill['Endurance'].replace('+', '')) +
  //             1;
  //         }
  //       }
  //       if (this.direMonster.save) {
  //         if (this.direMonster.save['str']) {
  //           const prof =
  //             parseInt(this.direMonster.save['str'].replace('+', '')) -
  //             Math.floor((this.monster.str - 10) / 2);
  //           this.direMonster.save['str'] = `+${
  //             prof + Math.floor((this.direMonster.str - 10) / 2)
  //           }`;
  //         }
  //         if (this.direMonster.save['con']) {
  //           this.direMonster.save['con'] =
  //             '+' +
  //             (parseInt(this.direMonster.save['con'].replace('+', '')) + 1);
  //         }
  //       }

  //       if (this.direMonster.swarmSize) {
  //         this.direMonster.size =
  //           this.sizes[
  //             this.sizes.findIndex((s) => s === this.direMonster.size) + 2
  //           ];
  //         this.direMonster.swarmSize =
  //           this.sizes[
  //             this.sizes.findIndex((s) => s === this.direMonster.swarmSize) + 1
  //           ];
  //       } else {
  //         this.direMonster.size =
  //           this.sizes[
  //             this.sizes.findIndex((s) => s === this.direMonster.size) + 1
  //           ];
  //       }

  //       if (this.direMonster.trait) {
  //         this.direMonster.trait = [
  //           {
  //             name: 'Dire Rage',
  //             entries: [
  //               `The ${this.direMonster.name.toLowerCase()} can make an additional attack with one of its natural weapons whenever it takes the Attack action.`,
  //             ],
  //           },
  //           ...this.direMonster.trait,
  //         ];
  //       } else {
  //         this.direMonster.trait = [
  //           {
  //             name: 'Dire Rage',
  //             entries: [
  //               `The ${this.direMonster.name.toLowerCase()} can make an additional attack with one of its natural weapons whenever it takes the Attack action.`,
  //             ],
  //           },
  //         ];
  //       }

  //       this.monster = this.direMonster;
  //     }
  //   } else {
  //     this.monster = this.data;
  //   }

  //   this.acString = this.monster.ac
  //     .map((ac: any) => {
  //       if (ac.from && ac.condition) {
  //         return `${ac.ac} (${ac.from}, ${ac.condition})`;
  //       } else if (ac.from) {
  //         return `${ac.ac} (${ac.from})`;
  //       } else if (ac.condition) {
  //         return `${ac.ac} (${ac.condition})`;
  //       } else {
  //         return ac.toString();
  //       }
  //     })
  //     .join(', ');

  //   const hitDice = parseInt(this.monster.hp.formula.split('d')[0].trim()) + 3;
  //   const hitDie =
  //     parseInt(this.monster.hp.formula.split('d')[1].split('+')[0].trim()) + 2;
  //   const conMod = Math.floor((this.monster.con - 10) / 2);

  //   this.hpString = `${
  //     (hitDie / 2 + conMod) * hitDice
  //   } (${hitDice}d${hitDie} + ${conMod})`;

  //   let speed = [];

  //   if (this.monster.speed.walk) {
  //     let speedString;

  //     if (this.monster.speed.walk.condition) {
  //       speedString = `${this.monster.speed.walk.number} ft. ${this.monster.speed.walk.condition}`;
  //     } else {
  //       speedString = `${this.monster.speed.walk} ft.`;
  //     }
  //     speed.push(speedString);
  //   } else {
  //     speed.push(`0 ft.`);
  //   }

  //   for (let [key, v] of Object.entries(this.monster.speed)) {
  //     const value: any = v;

  //     if (key !== 'walk' && key !== 'hover') {
  //       if (this.monster.speed.walk.condition) {
  //         speed.push(`${key} ${value.number} ft. ${value.condition}`);
  //       } else {
  //         speed.push(`${key} ${value} ft.`);
  //       }
  //     } else if (key === 'hover') {
  //       speed.push(`fly ${value} ft. (hover)`);
  //     }
  //   }

  //   this.speedString = speed.join(', ');

  //   if (this.monster.skill) {
  //     this.skillString = Object.entries(this.monster.skill)
  //       .map(([k, v]: any) => `${this.titleCase(k)} ${v}`)
  //       .join(', ');
  //   }
  //   if (this.monster.save) {
  //     this.saveString = Object.entries(this.monster.save)
  //       .map(([k, v]: any) => `${this.scoreKey[k]} ${v}`)
  //       .join(', ');
  //   }
  // }

  // public updateUndead(): void {
  //   if (this.undead !== 'undefined') {
  //     this.direBeast = false;
  //   }

  //   let currentUrl = window.location.href;
  //   currentUrl = currentUrl.split('?')[0];

  //   window.history.replaceState(
  //     {},
  //     '',
  //     currentUrl + `?dire=${this.direBeast ? '1' : '0'}&undead=${this.undead}`
  //   );

  //   if (['ghost', 'mummy', 'skeleton', 'zombie'].includes(this.undead)) {
  //     if (this.undeadMonster[this.undead]) {
  //       this.monster = this.undeadMonster[this.undead];
  //     } else {
  //       const undeadMonster = JSON.parse(JSON.stringify(this.data));
  //       const mods = this.undeadMods[this.undead];

  //       switch (this.undead) {
  //         case 'ghost':
  //           undeadMonster.name = `Ghost ${undeadMonster.name}`;
  //           break;
  //         case 'mummy':
  //           undeadMonster.name = `Mummified ${undeadMonster.name}`;
  //           break;
  //         case 'skeleton':
  //           undeadMonster.name = `${undeadMonster.name} Skeleton`;
  //           if (undeadMonster.spellcasting) {
  //             delete undeadMonster.spellcasting;
  //           }
  //           undeadMonster.int = Math.min(undeadMonster.int, 6);
  //           undeadMonster.wis = Math.min(undeadMonster.wis, 8);
  //           undeadMonster.cha = Math.min(undeadMonster.cha, 5);

  //           if (undeadMonster.languages) {
  //             undeadMonster.languages = [
  //               "understands all languages it spoke in life but can't speak",
  //             ];
  //           }

  //           break;
  //         case 'zombie':
  //           undeadMonster.name = `${undeadMonster.name} Zombie`;
  //           if (undeadMonster.spellcasting) {
  //             delete undeadMonster.spellcasting;
  //           }
  //           undeadMonster.int = Math.min(undeadMonster.int, 3);
  //           undeadMonster.wis = Math.min(undeadMonster.wis, 6);
  //           undeadMonster.cha = Math.min(undeadMonster.cha, 5);

  //           if (undeadMonster.languages) {
  //             undeadMonster.languages = [
  //               "understands all languages it spoke in life but can't speak",
  //             ];
  //           }

  //           break;
  //       }

  //       if (undeadMonster.type.includes('beast')) {
  //         undeadMonster.type = undeadMonster.type.replace('humanoid', 'undead');
  //       } else if (undeadMonster.type.includes('humanoid')) {
  //         undeadMonster.type = undeadMonster.type.replace('humanoid', 'undead');
  //       } else {
  //         undeadMonster.type = `undead ${undeadMonster.type}`;
  //       }

  //       if (!undeadMonster.tags) {
  //         undeadMonster.tags = [];
  //       }
  //       if (this.undead === 'ghost') {
  //         undeadMonster.tags.push('ethereal');
  //       } else {
  //         undeadMonster.tags.push('corporeal');
  //       }
  //       undeadMonster.tags = undeadMonster.tags.sort();

  //       if (mods.resist) {
  //         undeadMonster.resist = [
  //           ...new Set([...mods.resist, ...(undeadMonster.resist ?? [])]),
  //         ].sort((a, b) => {
  //           if (
  //             a ===
  //             'bludgeoning, piercing, and slashing damage from nonmagical attacks'
  //           ) {
  //             return 1;
  //           } else if (
  //             b ===
  //             'bludgeoning, piercing, and slashing damage from nonmagical attacks'
  //           ) {
  //             return -1;
  //           } else {
  //             return a.localeCompare(b);
  //           }
  //         });

  //         if (undeadMonster.vulnerable) {
  //           undeadMonster.vulnerable = undeadMonster.vulnerable.filter(
  //             (v: string) => !undeadMonster.resist.includes(v)
  //           );
  //         }
  //       }
  //       if (mods.immune) {
  //         undeadMonster.immune = [
  //           ...new Set([...mods.immune, ...(undeadMonster.immune ?? [])]),
  //         ].sort((a, b) => {
  //           if (
  //             a ===
  //             'bludgeoning, piercing, and slashing damage from nonmagical attacks'
  //           ) {
  //             return 1;
  //           } else if (
  //             b ===
  //             'bludgeoning, piercing, and slashing damage from nonmagical attacks'
  //           ) {
  //             return -1;
  //           } else {
  //             return a.localeCompare(b);
  //           }
  //         });

  //         if (undeadMonster.vulnerable) {
  //           undeadMonster.vulnerable = undeadMonster.vulnerable.filter(
  //             (v: string) => !undeadMonster.immune.includes(v)
  //           );
  //         }
  //         if (undeadMonster.resist) {
  //           undeadMonster.resist = undeadMonster.resist.filter(
  //             (r: string) => !undeadMonster.immune.includes(r)
  //           );
  //         }
  //       }
  //       if (mods.vulnerable) {
  //         undeadMonster.vulnerable = [
  //           ...new Set([
  //             ...mods.vulnerable,
  //             ...(undeadMonster.vulnerable ?? []),
  //           ]),
  //         ].sort((a, b) => {
  //           if (
  //             a ===
  //             'bludgeoning, piercing, and slashing damage from nonmagical attacks'
  //           ) {
  //             return 1;
  //           } else if (
  //             b ===
  //             'bludgeoning, piercing, and slashing damage from nonmagical attacks'
  //           ) {
  //             return -1;
  //           } else {
  //             return a.localeCompare(b);
  //           }
  //         });

  //         if (undeadMonster.resist) {
  //           undeadMonster.resist = undeadMonster.resist.filter(
  //             (r: string) => !undeadMonster.vulnerable.includes(r)
  //           );
  //         }
  //         if (undeadMonster.immune) {
  //           undeadMonster.vulnerable = undeadMonster.vulnerable.filter(
  //             (v: string) => !undeadMonster.immune.includes(v)
  //           );
  //         }
  //       }
  //       if (mods.conditionImmune) {
  //         undeadMonster.conditionImmune = [
  //           ...new Set([
  //             ...mods.conditionImmune,
  //             ...(undeadMonster.conditionImmune ?? []),
  //           ]),
  //         ].sort();
  //       }

  //       if (mods.action) {
  //         undeadMonster.action = [
  //           ...mods.action,
  //           ...(undeadMonster.action ?? []),
  //         ];
  //       }
  //       if (mods.trait) {
  //         undeadMonster.trait = [...mods.trait, ...(undeadMonster.trait ?? [])];
  //       }

  //       this.monster = undeadMonster;
  //       this.undeadMonster[this.undead] = undeadMonster;
  //     }
  //   } else {
  //     if (!this.direBeast) {
  //       this.monster = this.data;
  //     } else {
  //       this.monster = this.direMonster;
  //     }
  //   }
  // }
}
