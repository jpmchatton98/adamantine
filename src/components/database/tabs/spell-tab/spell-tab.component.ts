import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';

@Component({
  selector: 'app-spell-tab',
  templateUrl: './spell-tab.component.html',
  styleUrls: ['./spell-tab.component.scss'],
})
export class SpellTabComponent extends BaseComponent {
  public override pageTitle: string = 'Spells';
}
