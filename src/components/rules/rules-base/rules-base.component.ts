import { Component } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';

@Component({
  selector: 'app-rules-base',
  templateUrl: './rules-base.component.html',
  styleUrls: ['./rules-base.component.scss'],
})
export class RulesBaseComponent extends BaseComponent {
  public override pageTitle: string = 'Rules';
}
