import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-fighting-style-tab',
  templateUrl: './fighting-style-tab.component.html',
  styleUrls: ['./fighting-style-tab.component.scss'],
})
export class FightingStyleTabComponent implements OnInit {
  public fightingStyles = [];

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.fightingStyles =
      this.dataService.getExtraTabDataUnsplit('fighting-style');
  }
}
