import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from 'src/components/pages/features/builder.actions';
import { selectUpdate } from 'src/components/pages/features/builder.selectors';
import { DataService } from 'src/services/data.service';
import { DBService } from 'src/services/db.service';

@Component({
  selector: 'app-character-builder',
  templateUrl: './character-builder.component.html',
  styleUrls: ['./character-builder.component.scss'],
})
export class CharacterBuilderComponent implements OnInit {
  @Input()
  set guid(id: string) {
    this.characterId = id;
  }
  public characterId;
  public character: any;
  private dbCharacter: any;

  constructor(
    private dbService: DBService,
    private dataService: DataService,
    private store: Store
  ) {}

  async ngOnInit(): Promise<void> {
    await this.dbService.getCharacter(this.characterId).then((val) => {
      this.character = val;
      this.dbCharacter = JSON.parse(JSON.stringify(this.character));
    });

    this.store.select(selectUpdate).subscribe((update) => {
      if (update) {
        try {
          if (this.character) {
            this.cleanUpChoices();
            this.calculateActualScores();
          }
        } catch (ex) {
          console.error(ex);
        } finally {
          if (this.character) {
            const data = {
              ...this.dbCharacter,
              ...this.character,
            };

            this.dbService
              .setCharacterNoUser(this.characterId, data)
              .subscribe((response) => {
                console.info(response);
              });

            this.dbCharacter = data;
          }
        }
      }
    });
  }

  private cleanUpChoices() {
    Object.values(this.character ?? {}).forEach((obj: any) => {
      if (
        ![
          this.character.name,
          this.character.canRoll,
          this.character.scores,
          this.character.equipment,
        ].includes(obj)
      ) {
        if (!obj.feature) {
          if (Array.isArray(obj)) {
            for (let listItem of obj) {
              listItem.choices =
                listItem.choices?.filter(
                  (objCh: any) =>
                    listItem.choices.find((ch: any) => {
                      return (
                        objCh.sourceId === ch.id &&
                        (objCh.sourceValue === ch.value ||
                          ch.list.includes(objCh.sourceValue))
                      );
                    }) || objCh.sourceId === ''
                ) ?? [];
            }
          } else {
            if (obj.choices) {
              obj.choices =
                obj.choices?.filter(
                  (objCh: any) =>
                    obj.choices.find((ch: any) => {
                      return (
                        objCh.sourceId === ch.id &&
                        (objCh.sourceValue === ch.value ||
                          JSON.stringify(objCh.sourceValue) === ch.value)
                      );
                    }) || objCh.sourceId === ''
                ) ?? [];
            }
          }
        } else {
          if (obj.choices) {
            obj.choices =
              obj.choices?.filter((c: any) =>
                obj.feature.subFeatures.find((f: any) => f.id === c.sourceId)
              ) ?? [];
          }
        }
      }
    });
  }

  private calculateActualScores() {
    if (this.character?.scores) {
      let scoreMods = {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        hon: 0,
        san: 0,
      };

      if (this.character?.race) {
        const raceData = this.dataService.getRace(this.character.race.name);
        const subraceData = raceData.subraces?.find(
          (s: any) => s.name === this.character.race.subrace
        );

        for (let asi of raceData.asis) {
          if (!asi.id) {
            scoreMods[Object.keys(asi)[0]] += Object.values(asi)[0];
          } else {
            const choiceEntry = this.character.race.choices.find(
              (ch: any) => ch.id === asi.id
            );
            if (choiceEntry) {
              scoreMods[choiceEntry.value] += asi.amount;
            }
          }
        }

        for (let trait of raceData.traits) {
          scoreMods = this.combineScoreMods(
            scoreMods,
            this.getModsFromFeature(trait, this.character.race.choices)
          );
        }
        if (subraceData) {
          for (let asi of subraceData.asis) {
            if (!asi.id) {
              scoreMods[Object.keys(asi)[0]] += Object.values(asi)[0];
            } else {
              const choiceEntry = this.character.race.choices.find(
                (ch: any) => ch.id === asi.id
              );
              if (choiceEntry) {
                scoreMods[choiceEntry.value] += asi.amount;
              }
            }
          }

          for (let trait of subraceData.traits) {
            scoreMods = this.combineScoreMods(
              scoreMods,
              this.getModsFromFeature(trait, this.character.race.choices)
            );
          }
        }
      }

      if (this.character?.classes) {
        for (let c of this.character.classes) {
          const classData = this.dataService.getClass(c.name);
          if (classData) {
            const subclassData = classData.subclasses.find(
              (s) => s.name === c.subclass
            );
            for (let i = 1; i <= c.level; i++) {
              if (classData.features[i]) {
                for (let feature of classData.features[i]) {
                  scoreMods = this.combineScoreMods(
                    scoreMods,
                    this.getModsFromFeature(feature, c.choices)
                  );
                }
              }
              if (subclassData) {
                if (subclassData.features[i]) {
                  for (let feature of subclassData.features[i]) {
                    scoreMods = this.combineScoreMods(
                      scoreMods,
                      this.getModsFromFeature(feature, c.choices)
                    );
                  }
                }
              }
            }
          }
        }
      }

      if (this.character?.background?.choices) {
        const choiceEntry = this.character.background.choices.find(
          (ch: any) => ch.id === 'bg-feat'
        );
        if (choiceEntry) {
          this.combineScoreMods(
            scoreMods,
            this.getModsFromFeature(
              this.dataService.getFeat(choiceEntry.value),
              this.character.background.choices
            )
          );
        }
        const choiceEntry4 = this.character.background.choices.find(
          (ch: any) => ch.id === 'bg-feat-4'
        );
        if (choiceEntry4) {
          this.combineScoreMods(
            scoreMods,
            this.getModsFromFeature(
              this.dataService.getFeat(choiceEntry4.value),
              this.character.background.choices
            )
          );
        }
      }

      for (let key of Object.keys(this.character?.scores?.base ?? {})) {
        this.character.scores.actual[key] = Math.max(
          (parseInt(this.character.scores.base[key]?.toString() ?? '0') ?? 0) +
            (scoreMods[key] ?? 0) +
            (parseInt(
              (this.character.scores.mods ?? {})[key]?.toString() ?? '0'
            ) ?? 0),
          1
        );
      }
    }
  }

  public getModsFromFeature(feature: any, choiceList: any[]): any {
    let scoreMods = {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      hon: 0,
      san: 0,
    };

    if (feature?.choices) {
      if (Array.isArray(feature.choices)) {
        for (let choice of feature.choices) {
          scoreMods = this.combineScoreMods(
            scoreMods,
            this.getModsFromChoice(choice, choiceList)
          );
        }
      } else {
        scoreMods = this.combineScoreMods(
          scoreMods,
          this.getModsFromChoice(feature.choices, choiceList)
        );
      }
    }
    if (feature?.subFeatures) {
      for (let subFeature of feature.subFeatures) {
        scoreMods = this.combineScoreMods(
          scoreMods,
          this.getModsFromFeature(subFeature, choiceList)
        );
      }
    }
    if (feature?.granted) {
      for (let granted of feature.granted) {
        if (granted.type === 'asi') {
          if (granted.score.includes('-')) {
            const choiceEntry = choiceList.find(
              (ch: any) => ch.id === granted.score
            );
            if (choiceEntry) {
              scoreMods[choiceEntry.value] = granted.amount;
            }
          } else {
            scoreMods[granted.score] = granted.amount;
          }
        }
      }
    }

    return scoreMods;
  }

  public getModsFromChoice(choice: any, choiceList: any[]): any {
    let scoreMods = {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      hon: 0,
      san: 0,
    };

    if (choice.type === 'asi') {
      const choiceEntry = choiceList.find((ch: any) => ch.id === choice.id);
      if (choiceEntry) {
        scoreMods[choiceEntry.value] = choice.amount;
      }
    } else if (choice.type === 'trait') {
      const choiceEntry = choiceList.find((ch: any) => ch.id === choice.id);
      if (choiceEntry) {
        const choiceOption = choice.options.find(
          (o: any) => o.name === choiceEntry.value
        );
        if (choiceOption) {
          for (let trait of choiceOption.traits) {
            scoreMods = this.combineScoreMods(
              scoreMods,
              this.getModsFromFeature(trait, choiceList)
            );
          }
        }
      }
    } else if (choice.type === 'feat') {
      const choiceEntry = choiceList.find((ch: any) => ch.id === choice.id);
      if (choiceEntry) {
        const feat = this.dataService.getFeat(choiceEntry.value);
        if (feat) {
          scoreMods = this.combineScoreMods(
            scoreMods,
            this.getModsFromFeature(feat, choiceList)
          );
        }
      }
    }

    return scoreMods;
  }

  public combineScoreMods(a, b): any {
    for (let key of Object.keys(a)) {
      a[key] += b[key];
    }
    return a;
  }

  public reset() {
    localStorage.clear();
    location.reload();
  }

  public exportToJson() {
    let dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(this.character));
    let dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute(
      'download',
      `${this.character.name ? this.character.name : 'unnamed-character'}.json`
    );
    dlAnchorElem.click();
  }
}
