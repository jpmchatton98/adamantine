import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from 'src/components/pages/features/builder.actions';
import { selectUpdate } from 'src/components/pages/features/builder.selectors';
import { CharacterSheetService } from 'src/services/character-sheet.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'cs-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss'],
})
export class SpellsComponent implements OnInit {
  @Input() character: any;
  @Input() characterSpells: any[];
  @Input() upcastShow: number;

  public modalVisible;
  public modalOption;

  public standard = false;
  public pact = false;
  public sorcery = 0;
  public currSorcery;

  private sorceryCost = {
    1: 2,
    2: 3,
    3: 5,
    4: 6,
    5: 7,
  };

  constructor(
    private characterSheetService: CharacterSheetService,
    private dataService: DataService,
    private store: Store
  ) {}

  public ngOnInit(): void {
    if (!this.character.uses) {
      this.character.uses = [];
    }

    this.store.select(selectUpdate).subscribe((update) => {
      if (update) {
        let spellLevel = 0;
        let pactLevel = 0;
        let sorceryLevel = 0;
        for (let c of this.character.classes) {
          const classData = this.dataService.getClass(c.name);
          if (classData?.spellcaster) {
            if (classData.spellcastingType === 'standard') {
              spellLevel += Math.max(
                Math.floor(c.level / classData.spellcastingLevel),
                1
              );
            } else if (classData.spellcastingType === 'pact') {
              pactLevel += Math.max(
                Math.floor(c.level / classData.spellcastingLevel),
                1
              );
            } else if (classData.spellcastingType === 'sorcery') {
              sorceryLevel += Math.max(
                Math.floor(c.level / classData.spellcastingLevel),
                1
              );
            }
          }

          if (c.subclass) {
            const subclassData = this.dataService.getSubclass(
              c.name,
              c.subclass
            );
            if (subclassData?.spellcaster) {
              if (subclassData.spellcastingType === 'standard') {
                spellLevel += Math.max(
                  Math.floor(c.level / subclassData.spellcastingLevel),
                  1
                );
              } else if (subclassData.spellcastingType === 'pact') {
                pactLevel += Math.max(
                  Math.floor(c.level / subclassData.spellcastingLevel),
                  1
                );
              } else if (subclassData.spellcastingType === 'sorcery') {
                sorceryLevel += Math.max(
                  Math.floor(c.level / subclassData.spellcastingLevel),
                  1
                );
              }
            }
          }
        }

        this.standard = !!spellLevel;
        this.pact = !!pactLevel;

        let spellSlots =
          this.characterSheetService.spellSlots[spellLevel - 1] ?? [];
        let pactSlots =
          this.characterSheetService.pactSlots[pactLevel - 1] ?? [];
        this.sorcery =
          this.characterSheetService.sorceryPoints[sorceryLevel - 1] ?? 0;
        for (let i = 0; i < spellSlots.length; i++) {
          const level = spellSlots[i];
          const useIndex = this.character.uses.findIndex(
            (u) => u.id === `spells-${i + 1}`
          );
          if (useIndex !== -1) {
            this.character.uses[useIndex].maxUses = level;
          } else {
            this.character.uses.push({
              id: `spells-${i + 1}`,
              maxUses: level,
              currUses: level,
              reset: 2,
            });
          }
        }
        for (let i = 0; i < pactSlots.length; i++) {
          const level = pactSlots[i];
          const useIndex = this.character.uses.findIndex(
            (u) => u.id === `pact-spells-${i + 1}`
          );
          if (useIndex !== -1) {
            this.character.uses[useIndex].maxUses = level;
          } else {
            this.character.uses.push({
              id: `pact-spells-${i + 1}`,
              maxUses: level,
              currUses: level,
              reset: 1,
            });
          }
        }
        if (this.sorcery) {
          const useIndex = this.character.uses.findIndex(
            (u) => u.id === `sorcery`
          );
          if (useIndex !== -1) {
            this.character.uses[useIndex].maxUses = this.sorcery;
            const currUses = this.character.uses[useIndex].currUses;
            if (this.currSorcery !== currUses) {
              this.currSorcery = currUses;
            }
          } else {
            this.character.uses.push({
              id: `sorcery`,
              maxUses: this.sorcery,
              currUses: this.sorcery,
              reset: 2,
            });
            if (this.currSorcery === undefined) {
              this.currSorcery = this.sorcery;
            }
          }
        }

        const spells = [];
        let highestLevel =
          this.characterSpells[this.characterSpells.length - 1].name.charAt(0);
        if (highestLevel === 'C') {
          highestLevel = 0;
        }

        for (
          let i = 0;
          i <=
          Math.max(highestLevel, spellSlots.length - 1, pactSlots.length - 1);
          i++
        ) {
          if (i === 0 && this.characterSpells[0].name === 'Cantrips') {
            spells.push(this.characterSpells[i]);
          } else if (i !== 0) {
            const cSpellsIndex = this.characterSpells.findIndex(
              (c) => c.name.charAt(0) == i
            );
            if (cSpellsIndex === -1) {
              spells.push({
                name: `${this.levelFormatter(i)}-level`,
                spells: [],
              });
            } else {
              spells.push(this.characterSpells[cSpellsIndex]);
            }
          }
        }
        this.characterSpells = spells;
      }
    });
  }

  public getLevelSpells(level: any): any {
    let spells = [...level.spells];
    if (this.upcastShow === 1) {
      let base = 0;
      if (this.characterSpells[0].name === 'Cantrips') {
        base = 1;
      }

      for (
        let spellLevel = base;
        spellLevel < parseInt(level.name[0]);
        spellLevel++
      ) {
        for (let spell of this.characterSpells[spellLevel].spells) {
          spell = JSON.parse(JSON.stringify(spell));
          if (spell.spell.higherLevels) {
            const upcastSpell = spell.spell;

            const interval = upcastSpell.upcastInterval ?? 1;
            const levelDiff = parseInt(level.name[0]) - spell.spell.level;
            if (upcastSpell.upcastDice) {
              if (upcastSpell.damage) {
                if (upcastSpell.upcastDiceIds) {
                  for (let id of upcastSpell.upcastDiceIds) {
                    const damageIndex = upcastSpell.damage.findIndex(
                      (d) => d.id === id
                    );
                    if (damageIndex !== -1) {
                      upcastSpell.damage[damageIndex].dice +=
                        upcastSpell.upcastDice *
                        Math.floor(levelDiff / interval);
                    }
                  }
                } else {
                  for (let i = 0; i < upcastSpell.damage.length; i++) {
                    if (upcastSpell.damage[i].dice) {
                      upcastSpell.damage[i].dice +=
                        upcastSpell.upcastDice *
                        Math.floor(levelDiff / interval);
                    }
                  }
                }
              }
              if (upcastSpell.healing) {
                for (let i = 0; i < upcastSpell.healing.length; i++) {
                  if (upcastSpell.healing[i].dice) {
                    upcastSpell.healing[i].dice +=
                      upcastSpell.upcastDice * Math.floor(levelDiff / interval);
                  }
                }
              }
            }
            if (upcastSpell.upcastAmount) {
              if (upcastSpell.damage) {
                for (let i = 0; i < upcastSpell.damage.length; i++) {
                  if (upcastSpell.damage[i].amount) {
                    upcastSpell.damage[i].amount +=
                      upcastSpell.upcastAmount *
                      Math.floor(levelDiff / interval);
                  }
                }
              }
              if (upcastSpell.healing) {
                for (let i = 0; i < upcastSpell.healing.length; i++) {
                  if (upcastSpell.healing[i].amount) {
                    upcastSpell.healing[i].amount +=
                      upcastSpell.upcastAmount *
                      Math.floor(levelDiff / interval);
                  }
                }
              }
            }

            if (upcastSpell.upcastMultiplier) {
              if (upcastSpell.multiplier) {
                upcastSpell.multiplier +=
                  upcastSpell.upcastMultiplier *
                  Math.floor(levelDiff / interval);
              } else {
                upcastSpell.multiplier =
                  1 +
                  upcastSpell.upcastMultiplier *
                    Math.floor(levelDiff / interval);
              }
            }

            if (upcastSpell.upcastDuration) {
              if (upcastSpell.upcastDuration[level.name[0]]) {
                upcastSpell.duration =
                  upcastSpell.upcastDuration[level.name[0]];
              }
            }
            if (upcastSpell.upcastRange) {
              if (upcastSpell.upcastRange[level.name[0]]) {
                upcastSpell.range = upcastSpell.upcastRange[level.name[0]];
              }
            }

            spell.spell = upcastSpell;
            spell.upcast = true;

            spells.push(spell);
          }
        }
      }

      spells = spells.sort((a, b) => {
        return a.spell.name.localeCompare(b.spell.name);
      });
    }

    return spells;
  }

  private levelFormatter(level: number): string {
    switch (level) {
      case 1:
        return '1st';
      case 2:
        return '2nd';
      case 3:
        return '3rd';
      default:
        return `${level}th`;
    }
  }

  public openModal(spellName: string) {
    this.modalVisible = true;
    this.modalOption = spellName;
  }

  public characterLevel() {
    if (this.character?.classes) {
      return this.character.classes.reduce(
        (partialSum, a) => partialSum + a.level,
        0
      );
    }
    return 0;
  }
  public proficiencyBonus() {
    return Math.floor(2 + (this.characterLevel() - 1) / 4);
  }

  public getSpellAttackMod(ability: string): number {
    const abilityMod = parseInt(this.getModifier(ability).toString());
    const prof = this.proficiencyBonus();

    return abilityMod + prof;
  }
  public getSpellDC(ability: string): number {
    return 8 + this.getSpellAttackMod(ability);
  }
  public getSpellEffectMod(ability: string): string {
    const mod = parseInt(this.getModifier(ability).toString());

    if (mod !== undefined) {
      if (mod > 0) {
        return `+ ${mod}`;
      } else {
        return ` ${mod}`;
      }
    }
    return '';
  }

  public getScore(score: string): number {
    return (this.character.scores?.actual ?? {})[score];
  }
  public getModifier(score: string): number {
    return this.modifier(this.getScore(score));
  }

  public modifier(score: number): number {
    let mod = -5;
    if (score) {
      mod = Math.floor((score - 10) / 2);
    }
    return mod;
  }

  public formatModifier(modifier: number): string {
    if (modifier !== undefined) {
      if (modifier > 0) {
        return `+${modifier}`;
      } else {
        return modifier.toString();
      }
    }
    return '';
  }

  public getRangeString(spell: any): string {
    let range = spell.range;

    range = range.replaceAll('foot', 'ft').replaceAll('feet', 'ft');
    for (let [key, mdiClass] of Object.entries(
      this.characterSheetService.aoeIcons
    )) {
      range = range.replaceAll(
        key,
        `<span title="${key}" class="mdi mdi-${mdiClass}"></span>`
      );
    }

    return range;
  }

  public getEffectString(
    spell: any,
    ability: string,
    signature: boolean = false
  ): string {
    const effect = [];
    if (spell.damage) {
      effect.push(this.getDamageString(spell, ability, signature));
    }
    if (spell.healing) {
      effect.push(this.getHealingString(spell, ability));
    }
    if (spell.armor) {
      effect.push(this.getArmorString(spell));
    }

    if (effect.length) {
      return effect.join('<br>');
    }
    return '-';
  }
  private getDamageString(
    spell: any,
    ability: string,
    signature: boolean
  ): string {
    if (spell.damage) {
      let damage = spell.damage.map((d: any) => {
        let dice = d.dice;
        if (spell.level === 0 && spell.higherLevels && !signature) {
          if (this.characterLevel() >= 5) {
            dice += d.dice;
          }
          if (this.characterLevel() >= 11) {
            dice += d.dice;
          }
          if (this.characterLevel() >= 17) {
            dice += d.dice;
          }
        }

        if (Array.isArray(d.type)) {
          let mod = d.amount ?? 0;
          if (d.addAbility) {
            mod += this.getModifier(ability);
          }

          if (d.dice) {
            return `${dice}d${d.die} ${mod > 0 ? '+' : mod < 0 ? '-' : ''} ${
              mod ? Math.abs(mod) : ''
            } ${d.type
              .map(
                (t: string) =>
                  '<span title="' +
                  t +
                  '" class="damage-icon mdi mdi-' +
                  this.characterSheetService.damageIcons[t] +
                  '"></span>'
              )
              .join(', ')}`;
          } else if (d.amount) {
            return `${d.amount} ${d.type
              .map(
                (t: string) =>
                  '<span title="' +
                  t +
                  '" class="damage-icon mdi mdi-' +
                  this.characterSheetService.damageIcons[t] +
                  '"></span>'
              )
              .join(', ')}`;
          }
        } else {
          let mod = d.amount ?? 0;
          if (d.addAbility) {
            mod += this.getModifier(ability);
          }

          if (d.dice) {
            return `${dice}d${d.die}  ${mod > 0 ? '+' : mod < 0 ? '-' : ''} ${
              mod ? Math.abs(mod) : ''
            }<span  title="${d.type}" class="damage-icon mdi mdi-${
              this.characterSheetService.damageIcons[d.type]
            }"></span>`;
          } else if (d.amount) {
            return `${d.amount} <span  title="${
              d.type
            }" class="damage-icon mdi mdi-${
              this.characterSheetService.damageIcons[d.type]
            }"></span>`;
          }
        }
      });

      damage = damage.join(' + ');
      if (spell.multiplier) {
        damage += ` &times; ${spell.multiplier}`;
      }

      if (signature) {
        let m = 1;
        if (this.characterLevel() >= 5) {
          m += 1;
        }
        if (this.characterLevel() >= 11) {
          m += 1;
        }
        if (this.characterLevel() >= 17) {
          m += 1;
        }

        damage += ` &times; ${m}`;
      }

      return damage;
    }
  }
  private getHealingString(spell: any, ability: string): string {
    let mod = spell.healing[0].amount ?? 0;
    if (spell.healing[0].addAbility) {
      mod += this.getModifier(ability);
    }

    let mdiClass = 'heart';
    let title = 'healing';
    if (spell.healing[0].temporary) {
      mdiClass += '-plus';
      title = 'temp hp';
    }

    if (spell.healing[0].dice) {
      if (mod) {
        if (mod > 0) {
          return `${spell.healing[0].dice}d${spell.healing[0].die} + ${mod} <span title="${title}" class="mdi mdi-${mdiClass}"></span>`;
        } else {
          return `${spell.healing[0].dice}d${spell.healing[0].die} - ${Math.abs(
            mod
          )} <span title="${title}" class="mdi mdi-${mdiClass}"></span>`;
        }
      } else {
        return `${spell.healing[0].dice}d${spell.healing[0].die} <span title="${title}" class="mdi mdi-${mdiClass}"></span>`;
      }
    } else {
      return `${mod} <span title="${title}" class="mdi mdi-${mdiClass}"></span>`;
    }
  }
  private getArmorString(spell: any): string {
    if (spell.armor) {
      if (spell.armor.base) {
        return `${spell.armor.base} + DEX <span title="AC" class="mdi mdi-shield"></span>`;
      } else if (spell.armor.bonus) {
        return `+${spell.armor.bonus} <span title="AC" class="mdi mdi-shield"></span>`;
      } else if (spell.armor.penalty) {
        return `${spell.armor.penalty} <span title="AC" class="mdi mdi-shield"></span>`;
      } else if (spell.armor.fixed) {
        return `${spell.armor.fixed} <span title="AC" class="mdi mdi-shield"></span>`;
      }
    }
  }

  public getUseObject(index: number, pact: boolean = false) {
    if (this.character.uses) {
      const cantrips = this.characterSpells[0];
      if (cantrips.name !== 'Cantrips') {
        index++;
      }

      let use;
      if (pact) {
        use = this.character.uses.find((u) => u.id === `pact-spells-${index}`);
      } else {
        use = this.character.uses.find((u) => u.id === `spells-${index}`);
      }

      if (use) {
        return use;
      }
    }
  }
  public getUses(index: number, pact: boolean = false) {
    let checkboxes = [];
    const use = this.getUseObject(index, pact);

    let currUses = use?.currUses ?? 0;
    let maxUses = use?.maxUses ?? 0;

    for (let i = 0; i < maxUses; i++) {
      checkboxes[i] = i < currUses;
    }

    return checkboxes;
  }
  public getCurrUses(index: number, pact: boolean = false) {
    const use = this.getUseObject(index, pact);
    return use?.currUses ?? 0;
  }
  public getMaxUses(index: number, pact: boolean = false) {
    const use = this.getUseObject(index, pact);
    return use?.maxUses ?? 0;
  }

  public canCastSpellStandard(spell: any, atLevel: number): boolean {
    let level = spell?.spell?.level;
    if (atLevel) {
      level = atLevel;
    }

    let currUses = this.getCurrUses(level, false);
    if (currUses > 0) {
      return true;
    }
  }
  public canCastSpellPact(spell: any, atLevel: number): boolean {
    let level = spell?.spell?.level;
    if (atLevel) {
      level = atLevel;
    }

    let currUses = this.getCurrUses(level, true);
    if (currUses > 0) {
      return true;
    }
  }
  public canCastSpellSorcery(spell: any, atLevel: number): boolean {
    let level = spell?.spell?.level;
    if (atLevel) {
      level = atLevel;
    }

    let currUses = this.currSorcery;
    if (currUses >= this.sorceryCost[level]) {
      return true;
    }
  }

  public canCastSpell(spell: any, atLevel: number): boolean {
    if (this.standard) {
      if (this.canCastSpellStandard(spell, atLevel)) {
        return true;
      }
    }
    if (this.pact) {
      if (this.canCastSpellPact(spell, atLevel)) {
        return true;
      }
    }
    if (this.sorcery) {
      if (this.canCastSpellSorcery(spell, atLevel)) {
        return true;
      }
    }

    return false;
  }
  public castSpell(spell: any, atLevel: number) {
    if (!this.canCastSpell(spell, atLevel)) {
      return;
    }

    let level = spell.spell.level;
    if (atLevel) {
      level = atLevel;
    }

    if (this.standard) {
      if (this.canCastSpellStandard(spell, atLevel)) {
        this.changeUses(level, -1, false);
        return;
      }
    }
    if (this.pact) {
      if (this.canCastSpellPact(spell, atLevel)) {
        this.changeUses(level, -1, true);
        return;
      }
    }
    if (this.sorcery) {
      if (this.canCastSpellSorcery(spell, atLevel)) {
        this.changeSorcery(this.sorceryCost[level]);
        return;
      }
    }
  }

  public changeUses(index: number, direction: number, pact: boolean) {
    if (this.character.uses) {
      const cantrips = this.characterSpells[0];
      if (cantrips.name !== 'Cantrips') {
        index += 1;
      }

      let useIndex = -1;
      if (pact === true) {
        useIndex = this.character.uses.findIndex(
          (u) => u.id === `pact-spells-${index}`
        );
      } else if (pact === false) {
        useIndex = this.character.uses.findIndex(
          (u) => u.id === `spells-${index}`
        );
      }

      if (useIndex !== -1) {
        this.character.uses[useIndex].currUses += direction;
      }
    }

    this.store.dispatch(new Update());
  }

  public updateSorcery() {
    if (this.character.uses) {
      let useIndex = this.character.uses.findIndex((u) => u.id === `sorcery`);

      if (useIndex !== -1) {
        this.character.uses[useIndex].currUses = this.currSorcery;
      }
    }

    this.store.dispatch(new Update());
  }
  public changeSorcery(direction) {
    if (this.character.uses) {
      let useIndex = this.character.uses.findIndex((u) => u.id === `sorcery`);

      if (useIndex !== -1) {
        this.character.uses[useIndex].currUses += direction;
        this.currSorcery = this.character.uses[useIndex].currUses;
      }
    }

    this.store.dispatch(new Update());
  }
}
