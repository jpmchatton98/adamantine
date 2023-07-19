import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterBuilderService {
  constructor(private dataService: DataService) {}

  public getCharacterFromCache() {
    return JSON.parse(localStorage.getItem('character'));
  }

  public getTotalLevel() {
    return (
      this.getCharacterFromCache().classes?.reduce(
        (partialSum, a) => partialSum + a.level,
        0
      ) ?? 0
    );
  }

  public getScore(score: string): number {
    return (this.getCharacterFromCache().scores?.actual ?? {})[score] || 1;
  }
  public getModifier(score: string): number {
    return Math.floor((this.getScore(score) - 10) / 2);
  }

  public getCharacterSkillProficiencies() {
    const skillProfs = [];

    const character = JSON.parse(localStorage.getItem('character'));
    const skillList = this.dataService.getGeneric('skill');

    character.race?.choices?.forEach((choice) => {
      if (skillList.includes(choice.value)) {
        skillProfs.push({
          id: choice.id,
          value: choice.value,
          level: choice.level,
        });
      }
    });
    const raceData = this.dataService.getRace(character.race.name);
    let subraceData;
    if (character.race.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        if (trait.granted || trait.subFeatures) {
          skillProfs.push(...this.getFeatureSkillProfs(trait));
        }
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        if (trait.granted || trait.subFeatures) {
          skillProfs.push(...this.getFeatureSkillProfs(trait));
        }
      }
    }

    character.classes?.forEach((c) => {
      c.choices.forEach((choice) => {
        if (skillList.includes(choice.value)) {
          skillProfs.push({
            id: choice.id,
            value: choice.value,
            level: choice.level,
          });
        }
      });

      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            if (feature.granted || feature.subFeatures) {
              skillProfs.push(...this.getFeatureSkillProfs(feature));
            }
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            if (feature.granted || feature.subFeatures) {
              skillProfs.push(...this.getFeatureSkillProfs(feature));
            }
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (skillList.includes(choice.value)) {
        skillProfs.push({
          id: choice.id,
          value: choice.value,
          level: choice.level,
        });
      }
    });

    return skillProfs;
  }

  private getFeatureSkillProfs(feature: any) {
    const skillList = [];

    feature.granted?.forEach((g) => {
      if (g.type === 'skill' && g.options && Array.isArray(g.options)) {
        skillList.push(
          ...g.options.map((o: any) => {
            return {
              id: '',
              value: o,
              level: g.level,
            };
          })
        );
      }
    });
    feature.subFeatures?.forEach((s) => {
      skillList.push(...this.getFeatureSkillProfs(s));
    });

    return skillList;
  }

  public characterIsRace(race: string) {
    return (
      this.getCharacterFromCache().race?.name?.toLowerCase() ===
      race.toLowerCase()
    );
  }
}
