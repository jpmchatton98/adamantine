import { Component, Input } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-feat',
  templateUrl: './feat.component.html',
  styleUrls: ['./feat.component.scss'],
})
export class FeatComponent {
  @Input()
  set name(featName: string) {
    this.feat = this.dataService.getFeat(featName);
  }
  public feat: any;

  public dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }
}
