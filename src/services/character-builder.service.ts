import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterBuilderService {
  constructor(private dataService: DataService, private dbService: DBService) {}

  public character;
  public async getCharacterFromDb(characterId: string) {
    await this.dbService
      .getCharacter(characterId)
      .then((c) => (this.character = c));
  }

  public async getTotalLevel(characterId: string) {
    if (!this.character) {
      await this.getCharacterFromDb(characterId);
    }
    return (
      this.character?.classes?.reduce(
        (partialSum, a) => partialSum + a.level,
        0
      ) ?? 0
    );
  }

  public async getScore(characterId: string, score: string) {
    if (!this.character) {
      await this.getCharacterFromDb(characterId);
    }
    return (this.character?.scores?.actual ?? {})[score] || 1;
  }
  public async getModifier(characterId: string, score: string) {
    if (!this.character) {
      await this.getCharacterFromDb(characterId);
    }
    let mod;
    await this.getScore(characterId, score).then((score) => {
      mod = Math.floor((score - 10) / 2);
    });

    return mod;
  }

  public async characterIsRace(characterId: string, race: string) {
    if (!this.character) {
      await this.getCharacterFromDb(characterId);
    }
    return this.character?.race?.name?.toLowerCase() === race.toLowerCase();
  }
}
