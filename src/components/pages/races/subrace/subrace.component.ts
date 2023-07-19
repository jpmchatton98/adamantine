import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/services/data.service';

interface AbilityReference {
  [ability: string]: string;
}

@Component({
  selector: 'app-subrace',
  templateUrl: './subrace.component.html',
  styleUrls: ['./subrace.component.scss'],
})
export class SubraceComponent implements OnInit, OnChanges {
  @Input()
  set name(name: string) {
    this.subraceName = name;
  }

  public subraceName: string;
  public subrace: any;
  public asiString = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const raceName = this.route.parent.parent.snapshot.params['name'];
    this.subrace = this.dataService.getSubrace(raceName, this.subraceName);

    this.asiString = this.getAsiString();
  }

  ngOnChanges(): void {
    const raceName = this.route.parent.parent.snapshot.params['name'];
    this.subrace = this.dataService.getSubrace(raceName, this.subraceName);

    this.asiString = this.getAsiString();
  }

  public getAsiString() {
    if (
      this.subrace['asis'].every((a: any) => Object.keys(a).includes('options'))
    ) {
      return 'Two ability scores of your choice increase by 1.';
    }

    const ability_reference: AbilityReference = {
      str: 'Strength',
      dex: 'Dexterity',
      con: 'Constitution',
      int: 'Intelligence',
      wis: 'Wisdom',
      cha: 'Charisma',
    };

    let asi_string = '';
    let num_asi = this.subrace['asis'].length;

    for (let asi of this.subrace['asis']) {
      let choices = Object.keys(asi).length;
      let first_asi = this.subrace['asis'][0] === asi;
      let last_asi = this.subrace['asis'][num_asi - 1] === asi;

      const any_asi = Object.keys(asi).includes('options');

      if (any_asi) {
        if (num_asi > 2 && !first_asi) {
          asi_string += ', ';
        }
        if (num_asi > 1 && last_asi) {
          asi_string += ' and ';
        }

        asi_string += ` one other ability score of your choice increases by 1`;
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
}
