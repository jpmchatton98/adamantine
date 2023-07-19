import { Component, EventEmitter, Input } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent {
  @Input()
  set tab(selectedTab: string) {
    this.selectedTabIndex = this.tabList.findIndex((t: string) => t === selectedTab);
  }

  private tabList = [
    "spells", 
    "exploits", 
    "races", 
    "classes", 
    "backgrounds", 
    "feats", 
    "transformations", 
    "extra"
  ];
  public selectedTabIndex = 0;

  public setSelectedTab(value: number): void {
    let currentUrl = window.location.href;
    currentUrl = currentUrl.split('database')[0];

    window.history.replaceState({}, "", currentUrl + `database/${this.tabList[value]}`);
  }
}
