import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss'],
})
export class TransformationComponent extends BaseComponent {
  @Input()
  set name(tfName: string) {
    this.transformation = this.dataService.getTransformation(tfName);
    this.pageTitle = this.transformation.name;
  }
  public transformation: any;

  public tabIndex = 0;

  constructor(private dataService: DataService) {
    super();
  }

  public getLevelString(level: number): string {
    switch (level) {
      case 1:
        return '1st-Level';
      case 2:
        return '2nd-Level';
      case 3:
        return '3rd-Level';
      default:
        return `${level}th-Level`;
    }
  }
}
