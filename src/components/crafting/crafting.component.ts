import { Component } from '@angular/core';
import { BaseComponent } from '../meta/base/base.component';

@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.scss'],
})
export class CraftingComponent extends BaseComponent {
  public override pageTitle: string = 'Crafting';
}
