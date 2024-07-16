import { Component } from '@angular/core';
import { BaseTabComponent } from '../base-tab/base-tab.component';

@Component({
  selector: 'gs-animal-tab',
  templateUrl: './animal-tab.component.html',
  styleUrls: ['./animal-tab.component.scss'],
})
export class AnimalTabComponent extends BaseTabComponent {
  public nameUrlEncode(name: string): string {
    return (
      name
        ?.replace(/[ '"\(\)!\/:,&]/g, '-')
        .replace(/--+/g, '-')
        ?.toLowerCase() ?? ''
    );
  }
}
