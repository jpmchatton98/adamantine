import { Injectable } from '@angular/core';
import spells from '../data/character-creation-resources/spells.json';
import exploits from '../data/character-creation-resources/exploits.json';
import races from '../data/character-creation-resources/races.json';
import classes from '../data/character-creation-resources/classes.json';
import extraLists from '../data/character-creation-resources/lists.json';
import backgroundFeatures from '../data/character-creation-resources/background-features.json';
import feats from '../data/character-creation-resources/feats.json';
import transformations from '../data/character-creation-resources/transformations.json';
import generic from '../data/character-creation-resources/generic.json';
import monsters from '../data/monsters.json';
import { IClass, IRace, ISubclass, ISubrace } from 'src/app/models/data.models';

import meleeWeapons from '../data/general-store/weapons/melee-weapons.json';
import rangedWeapons from '../data/general-store/weapons/ranged-weapons.json';
import shields from '../data/general-store/shields.json';
import equipmentPacks from '../data/general-store/adventuring-equipment/equipment-packs.json';
import magicalFoci from '../data/general-store/adventuring-equipment/magical-foci.json';
import instruments from '../data/general-store/adventuring-equipment/musical-instruments.json';
import tools from '../data/general-store/adventuring-equipment/tools.json';

import injuries from '../data/house-rules/injuries.json';

import wildMagic from '../data/character-creation-resources/wild-magic.json';

interface GenericDictionary {
  [value: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private spellLists = [
    'arcane',
    'divine',
    'elemental',
    'melodic',
    'occult',
    'primal',
    'psionic',
  ];
  private exploitLists: GenericDictionary = {
    brutal: 'Brawler',
    deadeye: 'Gunslinger',
    defiant: 'Juggernaut',
    devious: 'Rogue',
    martial: 'Fighter',
    savage: 'Barbarian',
    tactical: 'Warlord',
    wild: 'Nomad',
  };
  private scoreReference: GenericDictionary = {
    str: 'Strength',
    dex: 'Dexterity',
    con: 'Constitution',
    int: 'Intelligence',
    wis: 'Wisdom',
    cha: 'Charisma',
  };

  constructor() {}

  public generateUUID() {
    var d = new Date().getTime();
    var d2 =
      (typeof performance !== 'undefined' &&
        performance.now &&
        performance.now() * 1000) ||
      0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }

  private nameUrlEncode(name: string): string {
    return name?.replace(/[ '"\(\)!\/:,]/g, '-')?.toLowerCase() ?? '';
  }
  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  public wildMagicSurge(): string {
    let surge = wildMagic[Math.floor(Math.random() * wildMagic.length)];

    if (surge.includes('~')) {
      if (surge.includes('spell~')) {
        if (surge.includes('1stlevel')) {
          let filtered = spells.filter((s) => s.level === 1);
          let spell = filtered[Math.floor(Math.random() * filtered.length)];

          surge = surge.replace('spell~1stlevel', spell.name);
        } else if (surge.includes('2ndlevel')) {
          let filtered = spells.filter((s) => s.level === 2);
          let spell = filtered[Math.floor(Math.random() * filtered.length)];

          surge = surge.replace('spell~2ndlevel', spell.name);
        } else if (surge.includes('3rdlevel')) {
          let filtered = spells.filter((s) => s.level === 3);
          let spell = filtered[Math.floor(Math.random() * filtered.length)];

          surge = surge.replace('spell~3rdlevel', spell.name);
        } else if (surge.includes('4thlevel')) {
          let filtered = spells.filter((s) => s.level === 4);
          let spell = filtered[Math.floor(Math.random() * filtered.length)];

          surge = surge.replace('spell~4thlevel', spell.name);
        } else if (surge.includes('5thlevel')) {
          let filtered = spells.filter((s) => s.level === 5);
          let spell = filtered[Math.floor(Math.random() * filtered.length)];

          surge = surge.replace('spell~5thlevel', spell.name);
        }
      }
    }

    return surge;
  }

  public getSpellsByList(list: string): any[] {
    let filteredSpells: any[] = [];
    if (list === 'all') {
      filteredSpells = spells;
    } else {
      if (this.spellLists.includes(list)) {
        filteredSpells = spells.filter((s: any) =>
          s.lists.map((l: string) => l.toLowerCase()).includes(list)
        );
      } else {
        filteredSpells = spells.filter(
          (s: any) => s.school.toLowerCase() === list
        );
      }
    }

    filteredSpells = filteredSpells
      .sort((a: any, b: any) => {
        if (a.level < b.level) {
          return -1;
        } else if (a.level === b.level) {
          return a.name.localeCompare(b.name);
        } else {
          return 1;
        }
      })
      .map((s: any) => {
        s.index = this.nameUrlEncode(s.name);
        return s;
      });

    const splitSpells: any[] = [];
    for (let i = 0; i < 10; i++) {
      if (filteredSpells.find((s: any) => s.level === i)) {
        let name = '';
        if (i === 0) {
          name = 'Cantrips';
        } else {
          switch (i) {
            case 1:
              name = '1st';
              break;
            case 2:
              name = '2nd';
              break;
            case 3:
              name = '3rd';
              break;
            default:
              name = `${i}th`;
              break;
          }
          name += '-level';
        }

        splitSpells.push({
          name: name,
          spells: filteredSpells.filter((s: any) => s.level === i),
        });
      }
    }

    return splitSpells;
  }
  public getSpellsByListUnsplit(list: string): any[] {
    let filteredSpells: any[] = [];
    if (list === 'all') {
      filteredSpells = spells;
    } else {
      if (this.spellLists.includes(list)) {
        filteredSpells = spells.filter((s: any) =>
          s.lists.map((l: string) => l.toLowerCase()).includes(list)
        );
      } else {
        filteredSpells = spells.filter(
          (s: any) => s.school.toLowerCase() === list
        );
      }
    }

    filteredSpells = filteredSpells
      .sort((a: any, b: any) => {
        if (a.level < b.level) {
          return -1;
        } else if (a.level === b.level) {
          return a.name.localeCompare(b.name);
        } else {
          return 1;
        }
      })
      .map((s: any) => {
        s.index = this.nameUrlEncode(s.name);
        return s;
      });

    return filteredSpells;
  }
  public getSpell(name: string): any {
    return spells.find(
      (s: any) => this.nameUrlEncode(s.name) === this.nameUrlEncode(name)
    );
  }

  public getExploitsByList(list: string): any[] {
    let filteredExploits: any[] = [];
    if (list === 'all') {
      filteredExploits = exploits;
    } else {
      filteredExploits = exploits.filter((e: any) =>
        e.lists.map((l: string) => l.toLowerCase()).includes(list)
      );
    }

    filteredExploits = filteredExploits
      .sort((a: any, b: any) => {
        if (a.degree < b.degree) {
          return -1;
        } else if (a.degree === b.degree) {
          return a.name.localeCompare(b.name);
        } else {
          return 1;
        }
      })
      .map((e: any) => {
        e.index = this.nameUrlEncode(e.name);
        if (e.save) {
          e.save = this.scoreReference[e.save];
        }
        return e;
      });

    const splitExploits: any[] = [];
    for (let i = 1; i <= 5; i++) {
      if (filteredExploits.find((e: any) => e.degree === i)) {
        let name = '';
        switch (i) {
          case 1:
            name = '1st';
            break;
          case 2:
            name = '2nd';
            break;
          case 3:
            name = '3rd';
            break;
          default:
            name = `${i}th`;
            break;
        }
        name += '-Degree';

        splitExploits.push({
          name: name,
          exploits: filteredExploits.filter((e: any) => e.degree === i),
        });
      }
    }

    return splitExploits;
  }
  public getExploitsByListUnsplit(list: string): any[] {
    let filteredExploits: any[] = [];
    if (list === 'all') {
      filteredExploits = exploits;
    } else {
      filteredExploits = exploits.filter((e: any) =>
        e.lists.map((l: string) => l.toLowerCase()).includes(list)
      );
    }

    filteredExploits = filteredExploits
      .sort((a: any, b: any) => {
        if (a.degree < b.degree) {
          return -1;
        } else if (a.degree === b.degree) {
          return a.name.localeCompare(b.name);
        } else {
          return 1;
        }
      })
      .map((e: any) => {
        e.index = this.nameUrlEncode(e.name);
        if (e.save) {
          e.save = this.scoreReference[e.save];
        }
        return e;
      });

    return filteredExploits;
  }
  public getExploit(name: string): any {
    let exploit = exploits.find(
      (e: any) => this.nameUrlEncode(e.name) === this.nameUrlEncode(name)
    );
    if (exploit.save) {
      exploit.save = this.scoreReference[exploit.save];
    }
    return exploit;
  }
  public getExploitData(name: string): any {
    return exploits.find(
      (e: any) => this.nameUrlEncode(e.name) === this.nameUrlEncode(name)
    );
  }

  public getRaces(): any {
    let raceData = races;
    raceData = raceData.map((r: any) => {
      r.index = this.nameUrlEncode(r.name);
      return r;
    });

    let splitRaces: any[] = [];
    for (let race of raceData) {
      let list = splitRaces.find((s: any) => s.name === race.category);
      if (list) {
        list.list.push(race);
        list.list = list.list.sort((a: any, b: any) =>
          a.name.localeCompare(b.name)
        );
      } else {
        splitRaces.push({
          name: race.category,
          list: [race],
        });
      }
    }

    splitRaces = splitRaces.sort((a, b) => a.name.localeCompare(b.name));

    return splitRaces;
  }
  public getRace(name: string): IRace {
    return races.find((r: any) => this.nameUrlEncode(r.name) === name);
  }
  public getSubrace(raceName: string, subraceName: string): ISubrace {
    const raceData = this.getRace(raceName);
    return raceData.subraces?.find(
      (s: any) => this.nameUrlEncode(s.name) === this.nameUrlEncode(subraceName)
    );
  }

  public getClasses(): any {
    let classData = classes;
    classData = classData.map((c: any) => {
      c.index = this.nameUrlEncode(c.name);
      return c;
    });

    return classData;
  }
  public getClass(name: string): IClass {
    const classData: any[] = classes;
    return classData.find((r: any) => this.nameUrlEncode(r.name) === name);
  }
  public getSubclass(className: string, subclassName: string): ISubclass {
    const classData = this.getClass(className);
    return classData.subclasses.find(
      (s: any) =>
        this.nameUrlEncode(s.name) === this.nameUrlEncode(subclassName)
    );
  }
  public getGenericListKeys(): string[] {
    return Object.keys(extraLists);
  }
  public getExtraTabData(dataType: string): any {
    const data = extraLists[dataType];

    let splitData: any[] = [];
    for (let item of data) {
      if (
        item.prereq &&
        (item.prereq.type === 'choice' || item.prereq.type === 'subclass')
      ) {
        const list = splitData.find((l) => l.prereq === item.prereq.value);

        if (!list) {
          splitData.push({
            prereq: item.prereq.value,
            name: item.prereq.value,
            list: [item],
          });
        } else {
          list.list.push(item);
        }
      } else if (item.prereqLevel) {
        const list = splitData.find((l) => l.prereq === item.prereqLevel);

        if (!list) {
          splitData.push({
            prereq: item.prereqLevel,
            list: [item],
          });
        } else {
          list.list.push(item);
        }
      } else {
        const list = splitData.find((l) => l.prereq === 'none');

        if (!list) {
          splitData.push({
            prereq: 'none',
            list: [item],
          });
        } else {
          list.list.push(item);
        }
      }
    }

    if (splitData.findIndex((l) => l.prereq === 'none') !== -1) {
      let firstDegree = splitData.find((l) => l.prereq === 'none');
      splitData = splitData.filter((l) => l.prereq !== 'none');
      splitData = splitData.sort((a: any, b: any) => {
        if (isNaN(a.prereq) && isNaN(b.prereq)) {
          return 0;
        } else if (isNaN(a.prereq) && !isNaN(b.prereq)) {
          return 1;
        } else if (!isNaN(a.prereq) && isNaN(b.prereq)) {
          return -1;
        } else {
          return a.prereq - b.prereq;
        }
      });
      splitData = [firstDegree, ...splitData];
      for (let i = 0; i < splitData.length; i++) {
        if (!splitData[i].name) {
          switch (i + 1) {
            case 1:
              splitData[i].name = '1st-Degree';
              break;
            case 2:
              splitData[i].name = '2nd-Degree';
              break;
            case 3:
              splitData[i].name = '3rd-Degree';
              break;
            default:
              splitData[i].name = `${i + 1}th-Degree`;
              break;
          }
        }
      }
    } else {
      for (let i = 0; i < splitData.length; i++) {
        if (!splitData[i].name) {
          switch (i + 1) {
            case 1:
              splitData[i].name = '1st-Degree';
              break;
            case 2:
              splitData[i].name = '2nd-Degree';
              break;
            case 3:
              splitData[i].name = '3rd-Degree';
              break;
            default:
              splitData[i].name = `${i + 1}th-Degree`;
              break;
          }
        }
      }
    }

    return splitData;
  }
  public getExtraTabDataUnsplit(dataType: string): any {
    return extraLists[dataType];
  }
  public getGenericListItem(dataType: string, name: string): any {
    return extraLists[dataType].find((i: any) => i.name === name);
  }

  public getBackgroundFeatures(): any[] {
    return backgroundFeatures;
  }

  public getFeats(): any[] {
    let featData = feats;
    featData = featData.map((f: any) => {
      f.index = this.nameUrlEncode(f.name);
      return f;
    });

    let splitFeats: any[] = [];
    for (let feat of featData) {
      if (feat.name !== 'placeholder') {
        let list = splitFeats.find(
          (s: any) => s.name === this.capitalize(feat.type)
        );
        if (list) {
          list.list.push(feat);
          list.list = list.list.sort((a: any, b: any) =>
            a.name.localeCompare(b.name)
          );
        } else {
          splitFeats.push({
            name: this.capitalize(feat.type),
            list: [feat],
          });
        }
      }
    }

    splitFeats = splitFeats.sort((a, b) => a.name.localeCompare(b.name));
    return splitFeats;
  }
  public getFeatsUnsplit(): any[] {
    let featData = feats;
    featData = featData
      .map((f: any) => {
        f.index = this.nameUrlEncode(f.name);
        return f;
      })
      .sort((a: any, b: any) => a.name.localeCompare(b.name));

    return featData;
  }
  public getFeat(name: string): any {
    return feats.find(
      (f: any) => this.nameUrlEncode(f.name) === this.nameUrlEncode(name)
    );
  }

  public getTransformations(): any[] {
    return transformations.map((t: any) => {
      t.index = this.nameUrlEncode(t.name);
      return t;
    });
  }
  public getTransformation(name: string): any {
    return transformations.find(
      (t: any) => this.nameUrlEncode(t.name) === name
    );
  }

  public getGenericKeys(): any[] {
    return Object.keys(generic);
  }
  public getGeneric(list: string): any[] {
    return generic[list];
  }

  public getMonsters(): any[] {
    let monsterData = monsters;
    monsterData = monsterData
      .map((m: any) => {
        m.index = this.nameUrlEncode(m.name);
        return m;
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    return monsterData;
  }
  public getMonster(name: string): any[] {
    return monsters.find(
      (m: any) => this.nameUrlEncode(m.name) === this.nameUrlEncode(name)
    );
  }

  public getItemsByType(
    type: string,
    subType: string = '',
    tower: boolean = false
  ): string[] {
    switch (type) {
      case 'simple-weapon':
        if (subType) {
          if (subType === 'melee') {
            return meleeWeapons
              .filter((w: any) => w.type === 0)
              .map((w: any) => w.name)
              .sort();
          } else if (subType === 'ranged') {
            return rangedWeapons
              .filter((w: any) => w.type === 0)
              .map((w: any) => w.name)
              .sort();
          }
        }
        return [
          ...meleeWeapons
            .filter((w: any) => w.type === 0)
            .map((w: any) => w.name),
          ...rangedWeapons
            .filter((w: any) => w.type === 0)
            .map((w: any) => w.name),
        ].sort();
      case 'martial-weapon':
        if (subType) {
          if (subType === 'melee') {
            return meleeWeapons
              .filter((w: any) => w.type === 1)
              .map((w: any) => w.name)
              .sort();
          } else if (subType === 'ranged') {
            return rangedWeapons
              .filter((w: any) => w.type === 1)
              .map((w: any) => w.name)
              .sort();
          }
        }
        return [
          ...meleeWeapons
            .filter((w: any) => w.type === 1)
            .map((w: any) => w.name),
          ...rangedWeapons
            .filter((w: any) => w.type === 1)
            .map((w: any) => w.name),
        ].sort();
      case 'exotic-weapon':
        if (subType) {
          if (subType === 'melee') {
            return meleeWeapons
              .filter((w: any) => w.type === 2)
              .map((w: any) => w.name)
              .sort();
          } else if (subType === 'ranged') {
            return rangedWeapons
              .filter((w: any) => w.type === 2)
              .map((w: any) => w.name)
              .sort();
          }
        }
        return [
          ...meleeWeapons
            .filter((w: any) => w.type === 2)
            .map((w: any) => w.name),
          ...rangedWeapons
            .filter((w: any) => w.type === 2)
            .map((w: any) => w.name),
        ].sort();
      case 'shield':
        return shields
          .filter(
            (s: any) =>
              !(
                [
                  'tower shield',
                  'snarlshield',
                  'wall shield',
                  'warshield',
                ].includes(s.name.toLowerCase()) && !tower
              ) && !(s.name.toLowerCase() === 'buckler')
          )
          .map((s: any) => s.name)
          .sort();
      case 'magical-foci':
        return magicalFoci
          .filter((m: any) => m.type.toLowerCase().includes(subType))
          .map((m: any) => m.name)
          .sort();
      case 'instrument':
        return instruments.map((i: any) => i.name).sort();
      case 'tool':
        return tools.map((t: any) => t.name).sort();
      case 'equipment-pack':
        return equipmentPacks.map((e: any) => e.name).sort();
      default:
        return [];
    }
  }

  public isEquipmentPack(itemName: string) {
    return !!equipmentPacks.find((e: any) => e.name.toLowerCase() === itemName);
  }
  public getEquipmentPackContents(itemName: string) {
    return equipmentPacks
      .find((e: any) => e.name.toLowerCase() === itemName)
      .contentsSheet.map((c: any) => {
        c.item = c.item.toLowerCase();
        return c;
      });
  }

  public getInjuries() {
    const newData = [];
    for (let [k, v] of Object.entries(injuries)) {
      newData.push({
        type: k,
        list: v,
      });
    }

    return newData;
  }
}
