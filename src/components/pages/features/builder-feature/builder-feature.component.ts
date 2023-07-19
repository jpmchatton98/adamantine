import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-builder-feature',
  templateUrl: './builder-feature.component.html',
  styleUrls: ['./builder-feature.component.scss'],
})
export class BuilderFeatureComponent {
  @Input() characterObj: any;

  @Input() feature: any;

  @Input() subFeature = false;
  @Input() choiceFeature = false;
  @Input() sourceId: string = '';
  @Input() sourceValue: string = '';

  @Input() level = 0;

  @Input() characterLevel = 21;

  public isArray(array: any): boolean {
    return Array.isArray(array);
  }
}
