import { Injectable } from '@angular/core';

import magicAmulets from '../data/crafting/enchanting/amulets.json';
import magicArmor from '../data/crafting/enchanting/armor.json';
import magicBackItems from '../data/crafting/enchanting/back.json';
import magicBelts from '../data/crafting/enchanting/belts.json';
import magicBooks from '../data/crafting/enchanting/books.json';
import magicBoots from '../data/crafting/enchanting/boots.json';
import magicGloves from '../data/crafting/enchanting/gloves.json';
import magicHelmets from '../data/crafting/enchanting/helmets.json';
import magicRings from '../data/crafting/enchanting/rings.json';
import magicTattoos from '../data/crafting/enchanting/tattoos.json';
import magicWeapons from '../data/crafting/enchanting/weapons.json';
import magicMisc from '../data/crafting/enchanting/misc.json';

import tools from '../data/crafting/tinkering/tools.json';

@Injectable({
  providedIn: 'root',
})
export class CraftingTableDataService {
  private tableData = {
    enchanting: {
      amulets: magicAmulets,
      armor: magicArmor,
      back: magicBackItems,
      belts: magicBelts,
      books: magicBooks,
      boots: magicBoots,
      gloves: magicGloves,
      helmets: magicHelmets,
      rings: magicRings,
      tattoos: magicTattoos,
      weapons: magicWeapons,
      misc: magicMisc,
    },
    tinkering: {
      tools: tools,
    },
  };

  public getTableData(branch: string, section: string = null): any[] {
    if (Object.keys(this.tableData).includes(branch)) {
      const branchData = this.tableData[branch];
      if (section !== null) {
        if (Object.keys(branchData).includes(section)) {
          return branchData[section];
        }
        console.error(
          `No section ${section} in ${branch} crafting branch found.`
        );
        return [];
      } else {
        return branchData;
      }
    }
    console.error(`No ${branch} crafting branch found`);
    return [];
  }
}
