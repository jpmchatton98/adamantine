import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-race-tab',
  templateUrl: './race-tab.component.html',
  styleUrls: ['./race-tab.component.scss'],
})
export class RaceTabComponent extends BaseComponent implements OnInit {
  public dataService: DataService;

  public override pageTitle: string = 'Races';

  constructor(dataService: DataService) {
    super();
    this.dataService = dataService;
  }
  public races: any[] = [];

  public override ngOnInit(): void {
    this.races = this.dataService.getRaces();
    super.ngOnInit();
  }
}
