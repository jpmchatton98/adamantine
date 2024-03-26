import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss'],
})
export class SpellComponent extends BaseComponent {
  @Input()
  set name(spellName: string) {
    this.spell = this.dataService.getSpell(spellName);
    this.pageTitle = this.spell.name;
  }
  public spell: any;

  public dataService: DataService;

  constructor(dataService: DataService) {
    super();
    this.dataService = dataService;
  }
}
