import { Component } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';

@Component({
  selector: 'app-lore-base',
  templateUrl: './lore-base.component.html',
  styleUrls: ['./lore-base.component.scss'],
})
export class LoreBaseComponent extends BaseComponent {
  public override pageTitle: string = 'Lore';
}
