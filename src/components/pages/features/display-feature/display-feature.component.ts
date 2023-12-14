import { Component, Input, OnInit } from '@angular/core';

interface GenericDictionary {
  [value: string]: string;
}

@Component({
  selector: 'app-display-feature',
  templateUrl: './display-feature.component.html',
  styleUrls: ['./display-feature.component.scss'],
})
export class DisplayFeatureComponent {
  @Input() feature: any;

  @Input() subFeature = false;
  @Input() choiceFeature = false;

  @Input() level = 0;

  @Input() showPrereqLevel: boolean = true;
  @Input() displayHeader: boolean = true;

  public isArray(array: any): boolean {
    return Array.isArray(array);
  }

  private scores: GenericDictionary = {
    str: 'Strength',
    dex: 'Dexterity',
    con: 'Constitution',
    int: 'Intelligence',
    wis: 'Wisdom',
    cha: 'Charisma',
  };

  public getFeatAbilityPrereq(prereq: any): string {
    let prereqString = '';
    for (let score of Object.keys(prereq[0])) {
      prereqString += `${this.scores[score]} ${prereq[0][score]}`;
    }

    return prereqString;
  }
  public getFeatRacialPrereq(prereq: any): string {
    let prereqString = '';

    for (let i = 0; i < prereq.race.length; i++) {
      if (i && prereq.race.length !== 2) {
        prereqString += ', ';
      }
      if (i === prereq.race.length - 1 && i !== 0) {
        prereqString += ' or ';
      }

      let racePrereq = prereq.race[i];
      if (prereq.subrace?.length) {
        if (prereq.subrace[i]?.length) {
          switch (typeof prereq.subrace[i]) {
            case 'string':
              racePrereq += ` (${prereq.subrace[i]})`;
              break;
            case 'object':
              racePrereq += ` (${prereq.subrace[i].join(', ')})`;
          }
        }
      }
      prereqString += racePrereq;
    }

    return prereqString;
  }
}
