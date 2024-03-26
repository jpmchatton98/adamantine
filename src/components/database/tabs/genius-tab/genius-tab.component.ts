import { Component } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';

@Component({
  selector: 'app-genius-tab',
  templateUrl: './genius-tab.component.html',
  styleUrls: ['./genius-tab.component.scss'],
})
export class GeniusTabComponent extends BaseComponent {
  public override pageTitle: string = 'Genius';
}
