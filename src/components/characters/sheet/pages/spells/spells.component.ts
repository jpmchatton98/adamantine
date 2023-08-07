import { Component, Input } from '@angular/core';
import { CharacterSheetService } from 'src/services/character-sheet.service';

@Component({
  selector: 'cs-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss'],
})
export class SpellsComponent {
  @Input() character: any;
  @Input() characterSpells: any[];

  public modalVisible;
  public modalOption;

  constructor(private characterSheetService: CharacterSheetService) {}

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
        } else {
          let mod = d.amount ?? 0;
          if (d.addAbility) {
            mod += this.getModifier(ability);
          }

          return `${dice}d${d.die}  ${mod > 0 ? '+' : mod < 0 ? '-' : ''} ${
            mod ? Math.abs(mod) : ''
          }<span  title="${d.type}" class="damage-icon mdi mdi-${
            this.characterSheetService.damageIcons[d.type]
          }"></span>`;
        }
      });

      damage = damage.join(' + ');

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
}
