import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-class-extra-tab',
  templateUrl: './class-extra-tab.component.html',
  styleUrls: ['./class-extra-tab.component.scss'],
})
export class ClassExtraTabComponent implements OnInit, OnChanges {
  @Input()
  set tab(tab: string) {
    this.dataType = tab;
  }
  @Input() className: string = '';

  dataType: string = '';

  public listData: any[] = [];
  public dataService: DataService;

  public extra = true;

  public list = '';
  public maxLevel = 0;
  public cantrips = false;

  public tabIndex = 0;

  public godsTab = false;
  public gods = [];

  constructor(dataService: DataService, private route: ActivatedRoute) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    if (this.dataType.includes('gods')) {
      this.godsTab = true;
      this.gods = this.dataService.getGodsByDomain(this.dataType.split('-')[1]);
    } else {
      this.getListData();
    }
  }
  ngOnChanges(): void {
    if (this.dataType.includes('gods')) {
      this.godsTab = true;
      this.gods = this.dataService.getGodsByDomain(this.dataType.split('-')[1]);
    } else {
      this.getListData();
    }
  }

  private getListData() {
    if (
      this.dataType.includes('spells') ||
      this.dataType.includes('cantrips') ||
      this.dataType.includes('exploits')
    ) {
      this.extra = false;

      const className = this.route.parent.snapshot.params['name'];
      const parentClassName = (this.route.parent.parent?.parent?.snapshot
        ?.params ?? {})['name'];

      let data;
      if (parentClassName) {
        data = this.dataService.getSubclass(parentClassName, className);
      } else {
        data = this.dataService.getClass(className);
      }

      let tabData = data.extraTabs.find((t: any) => t.key === this.dataType);
      if (
        this.dataType.includes('spells') ||
        this.dataType.includes('cantrips')
      ) {
        this.list = tabData.list;
        this.maxLevel =
          tabData.spellcaster !== 100
            ? Math.ceil(20 / (2 * tabData.spellcaster))
            : 0;
        this.cantrips =
          tabData.spellcaster !== 2 && tabData.list !== 'elemental';
      } else if (this.dataType.includes('exploits')) {
        this.list = tabData.list;
        this.maxLevel = Math.ceil(20 / (4 * data.exploitLevel));
      }

      if (tabData.maxLevel !== undefined) {
        this.maxLevel = tabData.maxLevel;
      }
      if (tabData.cantrips === false) {
        this.cantrips = false;
      }
    } else {
      this.extra = true;

      if (!this.className) {
        this.className = (this.route.parent.parent?.parent?.snapshot?.params ??
          {})['name'];
        if (!this.className) {
          this.className = this.route.parent.snapshot.params['name'];
        }
      }
      this.listData = this.dataService.getExtraTabData(this.dataType);
    }
  }

  public isNumber(value: any): boolean {
    return !isNaN(value);
  }

  public nameUrlEncode(name: string): string {
    return name?.replace(/[ '"\(\)!\/:,]/g, '-')?.toLowerCase() ?? '';
  }
}
