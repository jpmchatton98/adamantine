import { Component } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-feat-tab',
  templateUrl: './feat-tab.component.html',
  styleUrls: ['./feat-tab.component.scss'],
})
export class FeatTabComponent extends BaseComponent {
  public dataService: DataService;

  public override pageTitle: string = 'Feats';

  constructor(dataService: DataService) {
    super();
    this.dataService = dataService;
  }
  public feats: any[] = [];

  public override ngOnInit(): void {
    this.feats = this.dataService.getFeats();
    super.ngOnInit();
  }
}
