import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-race-tab',
  templateUrl: './race-tab.component.html',
  styleUrls: ['./race-tab.component.scss'],
})
export class RaceTabComponent implements OnInit {
  public dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }
  public races: any[] = [];

  public ngOnInit(): void {
    this.races = this.dataService.getRaces();
  }
}
