import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRace, ISubrace } from 'src/app/models/data.models';
import { Update } from 'src/components/pages/features/builder.actions';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'cb-race-tab',
  templateUrl: './race-tab.component.html',
  styleUrls: ['./race-tab.component.scss'],
})
export class RaceTabComponent implements OnInit {
  @Input() character: any;
  public dataService: DataService;
  public raceModalVisible: boolean = false;
  public characterRace: IRace;
  public characterSubrace: ISubrace;

  public asis: any[] = [];

  constructor(dataService: DataService, private store: Store) {
    this.dataService = dataService;
  }
  public races: any[] = [];

  public ngOnInit(): void {
    this.races = this.dataService.getRaces();

    let temp: any[] = [];
    for (let category of this.races) {
      temp = [...temp, ...category.list];
    }
    this.races = temp.sort((a, b) => a.name.localeCompare(b.name));

    if (this.character.race) {
      this.characterRace = this.dataService.getRace(this.character.race.name);
      this.characterSubrace = this.characterRace.subraces?.find(
        (s: any) => s.name === this.character.race.subrace
      );
      this.asis = [
        ...this.characterRace.asis,
        ...(this.characterSubrace?.asis ?? []),
      ];
    }
  }

  public setRace(raceName: string, subraceName?: string): void {
    if (this.character.race) {
      this.character.race.name = raceName;
      this.character.race.choices = [];
    } else {
      this.character.race = {
        name: raceName,
        choices: [],
      };
    }

    this.characterRace = this.dataService.getRace(raceName);
    if (subraceName) {
      this.character.race.subrace = subraceName;
      this.characterSubrace = this.characterRace.subraces?.find(
        (s: any) => s.name === subraceName
      );
    } else {
      delete this.character.race.subrace;
      delete this.characterSubrace;
    }

    this.asis = [
      ...this.characterRace.asis,
      ...(this.characterSubrace?.asis ?? []),
    ];

    this.raceModalVisible = false;

    this.store.dispatch(new Update());
  }

  public entries(object: any): string[][] {
    return Object.entries(object);
  }

  public getTotalLevel(): number {
    return (
      this.character.classes?.reduce(function (a: number, b: any) {
        return a + b.level;
      }, 0) ?? 0
    );
  }
}
