import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralStoreService } from 'src/services/general-store.service';

@Component({
  selector: 'gs-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss'],
})
export class StorePageComponent implements OnInit, OnChanges {
  @Input()
  set tab(tabName: string) {
    this.tabs =
      this.generalStoreService.tabs.find(
        (t: any) => this.nameUrlEncode(t.name) === tabName
      )?.children ?? [];
  }
  public tabs = [];
  public tabName = '';

  constructor(
    private generalStoreService: GeneralStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.tabName = (this.route.snapshot.firstChild?.params ?? {})['subtab'];
    if (!this.tabName) {
      this.changeRoute(this.nameUrlEncode(this.tabs[0].name));
    }
  }
  public ngOnChanges(changes: SimpleChanges): void {
    this.tabName = (this.route.snapshot.firstChild?.params ?? {})['subtab'];
    if (!this.tabName) {
      this.changeRoute(this.nameUrlEncode(this.tabs[0].name));
    }
  }

  public nameUrlEncode(name: string): string {
    return (
      name
        ?.replace(/[ '"\(\)!\/:,&]/g, '-')
        .replace(/--+/g, '-')
        ?.toLowerCase() ?? ''
    );
  }

  public changeRoute(route: string) {
    this.tabName = route;
    this.router.navigate([route], {
      relativeTo: this.route,
      replaceUrl: true,
    });
  }
}
