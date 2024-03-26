import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-fighting-style-tab',
  templateUrl: './fighting-style-tab.component.html',
  styleUrls: ['./fighting-style-tab.component.scss'],
})
export class FightingStyleTabComponent extends BaseComponent implements OnInit {
  public fightingStyles = [];

  public override pageTitle: string = 'Fighting Styles';

  constructor(private dataService: DataService) {
    super();
  }

  public override ngOnInit(): void {
    this.fightingStyles =
      this.dataService.getExtraTabDataUnsplit('fighting-style');

    super.ngOnInit();
  }
}
