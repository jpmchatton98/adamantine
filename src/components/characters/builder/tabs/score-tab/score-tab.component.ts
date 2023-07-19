import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { Update } from 'src/components/pages/features/builder.actions';

@Component({
  selector: 'cb-score-tab',
  templateUrl: './score-tab.component.html',
  styleUrls: ['./score-tab.component.scss'],
})
export class ScoreTabComponent implements OnInit {
  @Input() character: any;

  public rollMode: boolean = true;

  public scores = [];
  public str = [];
  public dex = [];
  public con = [];
  public int = [];
  public wis = [];
  public cha = [];
  public hon = [];
  public san = [];

  public strMod = 0;
  public dexMod = 0;
  public conMod = 0;
  public intMod = 0;
  public wisMod = 0;
  public chaMod = 0;
  public honMod = 0;
  public sanMod = 0;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.rollMode = this.character.scores?.rollMode ?? true;

    this.scores = this.character.scores?.rolled ?? [];

    if (this.character.scores?.base?.str) {
      this.str = [this.character.scores?.base?.str];
    }
    if (this.character.scores?.base?.dex) {
      this.dex = [this.character.scores?.base?.dex];
    }
    if (this.character.scores?.base?.con) {
      this.con = [this.character.scores?.base?.con];
    }
    if (this.character.scores?.base?.int) {
      this.int = [this.character.scores?.base?.int];
    }
    if (this.character.scores?.base?.wis) {
      this.wis = [this.character.scores?.base?.wis];
    }
    if (this.character.scores?.base?.cha) {
      this.cha = [this.character.scores?.base?.cha];
    }
    if (this.character.scores?.base?.hon) {
      this.hon = [this.character.scores?.base?.hon];
    }
    if (this.character.scores?.base?.san) {
      this.san = [this.character.scores?.base?.san];
    }

    if (this.character.scores?.mods) {
      this.strMod = this.character.scores.mods.str ?? 0;
      this.dexMod = this.character.scores.mods.dex ?? 0;
      this.conMod = this.character.scores.mods.con ?? 0;
      this.intMod = this.character.scores.mods.int ?? 0;
      this.wisMod = this.character.scores.mods.wis ?? 0;
      this.chaMod = this.character.scores.mods.cha ?? 0;
      this.sanMod = this.character.scores.mods.hon ?? 0;
      this.honMod = this.character.scores.mods.san ?? 0;
    }
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      if (
        event.container.id.includes('0') ||
        event.container.data.length === 0
      ) {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          1
        );
        transferArrayItem(
          event.container.data,
          event.previousContainer.data,
          0,
          event.previousIndex
        );
      }
    }

    this.updateCharacterScores();
  }

  public rollScores(): void {
    this.character.canRoll = false;

    this.scores = [];
    let numRolls = 7;
    if (this.character.honor) {
      numRolls++;
    }
    if (this.character.sanity) {
      numRolls++;
    }

    for (let i = 0; i < numRolls; i++) {
      this.scores.push(this.rollScore());
    }

    this.scores = this.scores.sort((a, b) => a - b);
    this.scores.shift();

    this.updateCharacterScores();
  }
  public rollScore(): number {
    let dice = [];
    for (let i = 0; i < 4; i++) {
      let roll = Math.floor(Math.random() * 6) + 1;
      while (roll < 3) {
        roll = Math.floor(Math.random() * 6) + 1;
      }

      dice.push(roll);
    }

    dice = dice.sort((a, b) => a - b);
    dice.shift();
    return dice.reduce((partialSum, a) => partialSum + a, 0);
  }

  public modifier(score: number): string {
    const mod = Math.floor((score - 10) / 2);
    if (mod > 0) {
      return `+${mod}`;
    } else {
      return mod.toString();
    }
  }

  public updateCharacterScores(): void {
    if (!this.character.scores) {
      this.character.scores = {
        base: {},
        actual: {},
        mods: {},
        rolled: this.scores,
        rollMode: this.rollMode,
      };
    }

    this.character.scores.rolled = this.scores;

    this.character.scores.base.str = this.str[0];
    this.character.scores.base.dex = this.dex[0];
    this.character.scores.base.con = this.con[0];
    this.character.scores.base.int = this.int[0];
    this.character.scores.base.wis = this.wis[0];
    this.character.scores.base.cha = this.cha[0];

    this.character.scores.base.hon = this.hon[0];
    this.character.scores.base.san = this.san[0];

    this.character.scores.mods.str = this.strMod;
    this.character.scores.mods.dex = this.dexMod;
    this.character.scores.mods.con = this.chaMod;
    this.character.scores.mods.int = this.intMod;
    this.character.scores.mods.wis = this.wisMod;
    this.character.scores.mods.cha = this.chaMod;

    this.character.scores.mods.hon = this.honMod;
    this.character.scores.mods.san = this.sanMod;

    this.character.scores.rollMode = this.rollMode;

    this.store.dispatch(new Update());
  }

  public resetScores(): void {
    if (!this.rollMode) {
      this.scores = [
        ...this.scores,
        ...this.str,
        ...this.dex,
        ...this.con,
        ...this.int,
        ...this.wis,
        ...this.cha,
        ...this.hon,
        ...this.san,
      ];
    }
    this.str = [];
    this.dex = [];
    this.con = [];
    this.int = [];
    this.wis = [];
    this.cha = [];
    this.hon = [];
    this.san = [];

    this.updateCharacterScores();
  }
}
