import { ChangeDetectorRef, Component } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-background-tab',
  templateUrl: './background-tab.component.html',
  styleUrls: ['./background-tab.component.scss'],
})
export class BackgroundTabComponent extends BaseComponent {
  public dataService: DataService;

  public override pageTitle: string = 'Backgrounds';

  constructor(dataService: DataService) {
    super();
    this.dataService = dataService;
  }
  public backgroundFeatures: any[] = [];
  public background: any;

  public override ngOnInit(): void {
    this.backgroundFeatures = this.dataService.getBackgroundFeatures();
    this.backgroundFeatures = this.backgroundFeatures.map((b: any) => {
      b.label = b.name;
      b.value = b.name;

      return b;
    });
    this.background = this.backgroundFeatures[0].value;

    super.ngOnInit();
  }

  public getBackground(): any {
    return this.backgroundFeatures.find(
      (b: any) => b.value === this.background
    );
  }
}
