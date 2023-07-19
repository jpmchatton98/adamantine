import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-transformation-tab',
  templateUrl: './transformation-tab.component.html',
  styleUrls: ['./transformation-tab.component.scss'],
})
export class TransformationTabComponent {
  public dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }
  public transformations: any[] = [];

  public ngOnInit(): void {
    this.transformations = this.dataService.getTransformations();
  }
}
