import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-dm-tools',
  templateUrl: './dm-tools.component.html',
  styleUrls: ['./dm-tools.component.scss'],
})
export class DmToolsComponent implements OnInit {
  public injuries;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.injuries = this.dataService.getInjuries();
  }

  public capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  public getRollRange(injury: any) {
    if (injury.minRoll === injury.maxRoll) {
      return injury.minRoll;
    }
    return `${injury.minRoll} - ${injury.maxRoll}`;
  }
}
