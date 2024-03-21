import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-lore-pantheons',
  templateUrl: './lore-pantheons.component.html',
  styleUrls: ['./lore-pantheons.component.scss'],
})
export class LorePantheonsComponent implements OnInit {
  public pantheons = [];

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.pantheons = this.dataService.getPantheons();
  }
}
