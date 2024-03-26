import { Component } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-transformation-tab',
  templateUrl: './transformation-tab.component.html',
  styleUrls: ['./transformation-tab.component.scss'],
})
export class TransformationTabComponent extends BaseComponent {
  public dataService: DataService;

  public override pageTitle: string = 'Transformations';

  constructor(dataService: DataService) {
    super();
    this.dataService = dataService;
  }
  public transformations: any[] = [];

  public override ngOnInit(): void {
    this.transformations = this.dataService.getTransformations();
    super.ngOnInit();
  }
}
