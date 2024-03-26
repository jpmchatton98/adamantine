import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { DataService } from 'src/services/data.service';

interface AbilityReference {
  [ability: string]: string;
}

@Component({
  selector: 'app-race-data',
  templateUrl: './race-data.component.html',
  styleUrls: ['./race-data.component.scss'],
})
export class RaceDataComponent extends BaseComponent implements OnInit {
  @Input() race;

  public asiString = '';
  public languageString = '';

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    super();
  }

  public override ngOnInit(): void {
    if (!this.race) {
      const raceName = this.route.parent.snapshot.params['name'];
      this.race = this.dataService.getRace(raceName);

      this.pageTitle = this.race.name;
    }

    if (this.race) {
      this.asiString = this.getAsiString();
      if (!this.languageString) {
        this.languageString = this.getLanguageString();
      }
    }

    super.ngOnInit();
  }

  public getAsiString() {
    const ability_reference: AbilityReference = {
      str: 'Strength',
      dex: 'Dexterity',
      con: 'Constitution',
      int: 'Intelligence',
      wis: 'Wisdom',
      cha: 'Charisma',
    };

    let asi_string = '';
    let num_asi = this.race['asis'].length;

    for (let asi of this.race['asis']) {
      let choices = Object.keys(asi).length;
      let first_asi = this.race['asis'][0] === asi;
      let last_asi = this.race['asis'][num_asi - 1] === asi;

      const any_asi = Object.keys(asi).includes('options');

      if (any_asi) {
        if (num_asi > 2 && !first_asi) {
          asi_string += ', ';
        }
        if (num_asi > 1 && last_asi) {
          asi_string += ' and ';
        }

        if (asi.amount < 0) {
          asi_string += ` one other ability score of your choice decreases by ${Math.abs(
            asi.amount
          )}`;
        } else {
          asi_string += ` one other ability score of your choice increases by ${asi.amount}`;
        }
      } else {
        for (let i = 0; i < Object.keys(asi).length; i++) {
          const asi_key = Object.keys(asi)[i];
          const asi_amt = asi[asi_key];
          if (num_asi > 2 && !first_asi) {
            asi_string += ', ';
          }
          if (num_asi > 1 && last_asi) {
            asi_string += ' and ';
          }

          if (num_asi !== 1) {
            if (asi_string) {
              asi_string += `your ${ability_reference[asi_key]} score increases by ${asi_amt}`;
            } else {
              asi_string += `Your ${ability_reference[asi_key]} score increases by ${asi_amt}`;
            }
          } else {
            asi_string = `Your ${ability_reference[asi_key]} score increases by ${asi_amt}`;
          }
        }
      }
    }
    return asi_string;
  }
  public getLanguageString(): string {
    let languageString = '';
    const numberNames = ['zero', 'one', 'two', 'three', 'four'];
    let any_languages = 0;
    for (let i = 0; i < this.race.languages.length; i++) {
      const language = this.race.languages[i];
      if (typeof language !== 'string') {
        any_languages++;
      } else {
        if (languageString) {
          if (this.race.languages.length >= 3) {
            languageString += ', ';
            if (i === this.race.languages.length - 1) {
              languageString += 'and ';
            }
          } else {
            languageString += ' and ';
          }
        }
        languageString += language;
      }
    }
    if (any_languages) {
      if (this.race.languages.length - any_languages >= 2) {
        languageString += ',';
      }

      if (any_languages > 1) {
        languageString += ` and ${numberNames[any_languages]} other languages of your choice`;
      } else {
        languageString += ` and ${numberNames[any_languages]} other language of your choice`;
      }
    }

    return languageString;
  }
}
