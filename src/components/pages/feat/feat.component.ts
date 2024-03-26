import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-feat',
  templateUrl: './feat.component.html',
  styleUrls: ['./feat.component.scss'],
})
export class FeatComponent extends BaseComponent {
  @Input()
  set name(featName: string) {
    this.feat = this.dataService.getFeat(featName);
    this.pageTitle = this.feat.name;
  }
  public feat: any;

  constructor(private dataService: DataService) {
    super();
  }
}
