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
}
