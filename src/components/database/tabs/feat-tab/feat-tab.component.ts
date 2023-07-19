import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-feat-tab',
  templateUrl: './feat-tab.component.html',
  styleUrls: ['./feat-tab.component.scss'],
})
export class FeatTabComponent {
  public dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }
  public feats: any[] = [];

  public ngOnInit(): void {
    this.feats = this.dataService.getFeats();
  }
}
