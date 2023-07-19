import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-background-tab',
  templateUrl: './background-tab.component.html',
  styleUrls: ['./background-tab.component.scss'],
})
export class BackgroundTabComponent {
  public dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }
  public backgroundFeatures: any[] = [];
  public background: any;

  public ngOnInit(): void {
    this.backgroundFeatures = this.dataService.getBackgroundFeatures();
    this.backgroundFeatures = this.backgroundFeatures.map((b: any) => {
      b.label = b.name;
      b.value = b.name;

      return b;
    });
    this.background = this.backgroundFeatures[0].value;
  }

  public getBackground(): any {
    return this.backgroundFeatures.find(
      (b: any) => b.value === this.background
    );
  }
}
