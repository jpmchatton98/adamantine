import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Store } from '@ngrx/store';
import { Update } from '../builder.actions';
import { selectUpdate } from '../builder.selectors';
import { CharacterBuilderService } from 'src/services/character-builder.service';
import { CharacterSheetService } from 'src/services/character-sheet.service';

interface IPrereq {
  race?: string[];
  spellcasting?: boolean;
  light?: boolean;
  medium?: boolean;
  heavy?: boolean;
  martial?: boolean;

  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
}

@Component({
  selector: 'app-builder-choice',
  templateUrl: './builder-choice.component.html',
  styleUrls: ['./builder-choice.component.scss'],
})
export class BuilderChoiceComponent implements OnInit {
  @Input() characterObj: any;

  @Input() sourceId: string = '';
  @Input() sourceValue: string = '';
  @Input() choice: any;
  @Input() subChoice = false;

  @Input() level = 0;
  @Input() characterLevel = 21;

  @Input() characterId: string;

  public genericListKeys: string[] = [];
  public choiceOptions: any[] = [];

  public choiceValue: any = null;
  public choiceOption: any;

  public dataService: DataService;

  constructor(
    dataService: DataService,
    private characterBuilderService: CharacterBuilderService,
    private characterSheetService: CharacterSheetService,
    private store: Store,
    private changeRef: ChangeDetectorRef
  ) {
    this.dataService = dataService;
  }

  public ngOnInit(): void {
    this.genericListKeys = this.dataService.getGenericListKeys();

    const choiceEntry = this.characterObj?.choices.find(
      (ch: any) => ch.id === this.choice.id
    );
    if (choiceEntry) {
      this.choiceValue = choiceEntry.value;
    }

    this.store.select(selectUpdate).subscribe((update) => {
      if (update) {
        setTimeout(() => {
          this.setup();
          this.changeRef.detectChanges();
        }, 100);
      }
    });
  }

  private async setup() {
    await this.getChoiceOptions(this.choice).then(
      (options) => (this.choiceOptions = options)
    );

    if (this.choiceOptions[0]?.options) {
      if (
        this.choiceOptions?.length &&
        !this.choiceOptions.find((ol: any) => {
          return ol?.options?.find(
            (o: any) => o.name === this.choiceValue || o === this.choiceValue
          );
        }) &&
        !(this.choiceValue === null)
      ) {
        this.choiceValue = null;
        this.onChange();
      }
    } else {
      if (
        this.choiceOptions?.length &&
        !this.choiceOptions.find(
          (o: any) => o.name === this.choiceValue || o === this.choiceValue
        ) &&
        !(this.choiceValue === null)
      ) {
        this.choiceValue = null;
        this.onChange();
      }
    }

    if (this.choiceValue !== null) {
      if (this.choice.type === 'trait') {
        this.choiceOption = this.choice.options.find(
          (o: any) => o.name === this.choiceValue
        );
      } else if (this.choice.type === 'spell') {
        this.choiceOption = this.dataService.getSpell(this.choiceValue);
      } else if (this.choice.type === 'exploit') {
        this.choiceOption = this.dataService.getExploit(this.choiceValue);
      } else if (this.choice.type === 'feat') {
        this.choiceOption = this.dataService.getFeat(this.choiceValue);
      } else if (this.genericListKeys.includes(this.choice.type)) {
        this.choiceOption = this.dataService.getGenericListItem(
          this.choice.type,
          this.choiceValue
        );
      }
    }
  }

  public choiceTypes(value: any): boolean {
    return value[0]?.options !== undefined;
  }

  public onChange(): void {
    const choiceEntry = this.characterObj.choices.find(
      (ch: any) => ch.id === this.choice.id
    );
    if (choiceEntry) {
      choiceEntry.value = this.choiceValue;
    } else {
      this.characterObj.choices.push({
        id: this.choice.id,
        sourceId: this.sourceId,
        sourceValue: this.sourceValue,
        value: this.choiceValue,
        level: this.choice.level,
      });
    }

    if (this.choiceValue !== null) {
      if (this.choice.type === 'trait') {
        this.choiceOption = this.choice.options.find(
          (o: any) => o.name === this.choiceValue
        );
      } else if (this.choice.type === 'spell') {
        this.choiceOption = this.dataService.getSpell(this.choiceValue);
      } else if (this.choice.type === 'exploit') {
        this.choiceOption = this.dataService.getExploit(this.choiceValue);
      } else if (this.choice.type === 'feat') {
        this.choiceOption = this.dataService.getFeat(this.choiceValue);
      } else if (this.genericListKeys.includes(this.choice.type)) {
        this.choiceOption = this.dataService.getGenericListItem(
          this.choice.type,
          this.choiceValue
        );
      }
    }

    this.store.dispatch(new Update());
  }

  private async getChoiceOptions(choice) {
    let choiceOptions = [];
    if (Array.isArray(choice.type)) {
      for (let type of choice.type) {
        const temp = JSON.parse(JSON.stringify(choice));
        temp.type = type;

        await this.getChoiceOptions(temp).then((o) => {
          choiceOptions.push({
            name: type,
            options: o,
          });
        });
      }
    } else {
      if (choice?.type !== 'trait') {
        if (this.dataService.getGenericKeys().includes(choice?.type)) {
          choiceOptions = this.dataService.getGeneric(choice.type);
          if (choice.limits) {
            choiceOptions = choiceOptions.filter((o: any) =>
              choice.limits.includes(o)
            );
          }

          if (choice.type === 'skill') {
            let characterSkillProfs;
            await this.characterSheetService
              .getCharacterSkillProficiencies(this.characterId)
              .then((val) => (characterSkillProfs = val));
            choiceOptions = choiceOptions.filter((o: any) => {
              return !characterSkillProfs.find((p: any) => {
                return (
                  p.value === o &&
                  p.id !== this.choice.id &&
                  p.level > this.choice.level
                );
              });
            });
          }
        } else if (choice?.type === 'spell') {
          if (choice.id.includes('sorcerer')) {
            choiceOptions = this.dataService
              .getSpellsByListUnsplit('all')
              .filter(
                (s: any) =>
                  s.level === (choice.level ?? 10) &&
                  (s.lists.includes('Arcane') ||
                    (this.characterObj.subclass === 'Divine Soul' &&
                      s.lists.includes('Divine')))
              );

            choiceOptions = choiceOptions.filter(
              (value, index, self) =>
                index === self.findIndex((t) => t.name === value.name)
            );
          } else if (choice.id === 'signature-cantrip') {
            choiceOptions = this.dataService
              .getSpellsByListUnsplit('all')
              .filter(
                (s: any) =>
                  s.level === (choice.level ?? 10) && s.lists.includes('Occult')
              );

            choiceOptions = choiceOptions.filter((spell) => {
              return (
                spell.castingTime === '1 action' &&
                spell.damage &&
                !spell.duration.includes('Concentration') &&
                !spell.multi
              );
            });

            choiceOptions = choiceOptions.filter(
              (value, index, self) =>
                index === self.findIndex((t) => t.name === value.name)
            );
          } else {
            choiceOptions = this.dataService
              .getSpellsByListUnsplit('all')
              .filter(
                (s: any) =>
                  (s.level === (choice.level ?? 10) &&
                    (choice.list?.includes(s.school) ||
                      choice.list === s.school ||
                      s.lists.find((l: string) =>
                        choice.list?.includes(
                          l.toLowerCase() || choice.list === l.toLowerCase()
                        )
                      ))) ||
                  choice.limits?.includes(s.name)
              );
          }
        } else if (choice?.type === 'exploit') {
          choiceOptions = this.dataService
            .getExploitsByListUnsplit('all')
            .filter(
              (e: any) =>
                (e.degree <= (choice.degree ?? 6) &&
                  e.lists.find(
                    (l: string) =>
                      choice?.list.includes(l.toLowerCase()) ||
                      choice?.list === l.toLowerCase()
                  )) ||
                choice.limits?.includes(e.name)
            );
        } else if (this.genericListKeys?.includes(choice?.type)) {
          choiceOptions = this.dataService
            .getExtraTabDataUnsplit(choice.type)
            .filter((i: any) => !i.prereq && !i.prereqLevel);
        } else if (choice?.type === 'asi') {
          choiceOptions = choice.options.filter(async (o: any) => {
            if (o === this.choiceOption) {
              return true;
            }

            let score;
            await this.characterBuilderService
              .getScore(this.characterId, o)
              .then((val) => {
                score = val;
              });
            return score < 20;
          });
        } else if (choice?.type === 'text') {
          choiceOptions = choice.options;
        } else if (choice?.type === 'feat') {
          choiceOptions = this.dataService
            .getFeatsUnsplit()
            .filter(async (f: any) => {
              if (!f.prereq) {
                return true;
              }
              for (let p of f.prereq) {
                const prereq: IPrereq = p;

                if (prereq.race) {
                  for (let race of prereq.race) {
                    let isRace;
                    await this.characterBuilderService
                      .characterIsRace(this.characterId, race)
                      .then((val) => (isRace = val));
                    if (isRace) {
                      return true;
                    }
                  }
                } else if (prereq.spellcasting) {
                  return true;
                } else if (prereq.light) {
                  return true;
                } else if (prereq.medium) {
                  return true;
                } else if (prereq.heavy) {
                  return true;
                } else if (prereq.martial) {
                  return true;
                } else {
                  let score;
                  await this.characterBuilderService
                    .getScore(this.characterId, Object.keys(prereq)[0])
                    .then((val) => (score = val));
                  if (score) {
                    const prereqScore: number = Object.values(prereq)[0];
                    return score >= prereqScore;
                  }
                }
              }
              return false;
            });
        }
      } else {
        choiceOptions = choice.options;
        if (choice.id === 'draconic-legacy') {
          choiceOptions = choiceOptions.filter((o: any) => {
            if (o.name.includes('Pureblood')) {
              if (o.name.includes('Chromatic')) {
                return [
                  'Black',
                  'Blue',
                  'Green',
                  'Purple',
                  'Red',
                  'White',
                ].includes(this.characterObj.subrace);
              }
              if (o.name.includes('Gem')) {
                return [
                  'Amethyst',
                  'Crystal',
                  'Emerald',
                  'Moonstone',
                  'Obsidian',
                  'Ruby',
                  'Sapphire',
                  'Topaz',
                ].includes(this.characterObj.subrace);
              }
              if (o.name.includes('Metallic')) {
                return [
                  'Brass',
                  'Bronze',
                  'Copper',
                  'Gold',
                  'Platinum',
                  'Silver',
                  'Steel',
                  'Tungsten',
                ].includes(this.characterObj.subrace);
              }
            } else {
              return true;
            }
          });
        } else if (choice.id === 'metallic-breath') {
          choiceOptions = choiceOptions.filter((o: any) =>
            o.name.includes(this.characterObj.subrace)
          );
        }
      }
    }

    return choiceOptions;
  }
}
