import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-racial-feat-tab',
  templateUrl: './racial-feat-tab.component.html',
  styleUrls: ['./racial-feat-tab.component.scss'],
})
export class RacialFeatTabComponent {
  public dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }
  public feats: any[] = [];
  public races: any[] = [];

  public ngOnInit(): void {
    this.feats = this.dataService.getFeatsUnsplit();
    this.races = this.dataService.getRaces();
  }

  public getRacialFeats(race: string): any[] {
    return this.feats.filter((f) => {
      if ((f?.prereq ?? [])[0]?.race?.includes(race.toLowerCase())) {
        return true;
      }
      return false;
    });
  }
}
