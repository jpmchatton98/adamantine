import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss'],
})
export class TransformationComponent {
  @Input()
  set name(tfName: string) {
    this.transformation = this.dataService.getTransformation(tfName);
  }
  public transformation: any;

  public dataService: DataService;

  public tabIndex = 0;

  constructor(dataService: DataService) {
    this.dataService = dataService;
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
