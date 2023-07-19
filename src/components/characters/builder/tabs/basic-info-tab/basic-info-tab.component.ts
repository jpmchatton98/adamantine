import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from 'src/components/pages/features/builder.actions';

@Component({
  selector: 'cb-basic-info-tab',
  templateUrl: './basic-info-tab.component.html',
  styleUrls: ['./basic-info-tab.component.scss'],
})
export class BasicInfoTabComponent {
  @Input() character: any;

  constructor(private store: Store) {}

  public update() {
    this.store.dispatch(new Update());
  }
}
