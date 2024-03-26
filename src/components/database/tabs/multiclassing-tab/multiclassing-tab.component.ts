import { Component } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';

@Component({
  selector: 'app-multiclassing-tab',
  templateUrl: './multiclassing-tab.component.html',
  styleUrls: ['./multiclassing-tab.component.scss'],
})
export class MulticlassingTabComponent extends BaseComponent {
  public override pageTitle: string = 'Multiclassing';
}
