import { Component, Input } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent {
  @Input()
  set name(spellName: string) {
    this.spell = this.dataService.getSpell(spellName)
  }
  public spell: any;

  public dataService: DataService;

  constructor (
    dataService: DataService
  ) {
    this.dataService = dataService;
  }
}
