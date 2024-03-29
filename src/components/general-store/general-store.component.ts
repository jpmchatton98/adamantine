import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralStoreService } from 'src/services/general-store.service';
import { BaseComponent } from '../meta/base/base.component';

@Component({
  selector: 'app-general-store',
  templateUrl: './general-store.component.html',
  styleUrls: ['./general-store.component.scss'],
})
export class GeneralStoreComponent extends BaseComponent implements OnInit {
  public tabs = [];
  public tabName: string = 'basic-equipment';

  public override pageTitle: string = 'General Store';

  constructor(
    private generalStoreService: GeneralStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  public override ngOnInit(): void {
    this.tabs = this.generalStoreService.tabs;

    this.tabName =
      (this.route.snapshot.firstChild?.params ?? {})['tab'] ??
      'basic-equipment';

    super.ngOnInit();
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
