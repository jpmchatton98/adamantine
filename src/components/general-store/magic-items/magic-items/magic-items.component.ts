import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/components/meta/base/base.component';
import { GeneralStoreService } from 'src/services/general-store.service';

@Component({
  selector: 'app-magic-items',
  templateUrl: './magic-items.component.html',
  styleUrls: ['./magic-items.component.scss'],
})
export class MagicItemsComponent extends BaseComponent implements OnInit {
  public rarities = [
    'Common',
    'Uncommon',
    'Rare',
    'Very Rare',
    'Legendary',
    'Artifact',
  ];
  public tabName = '';

  public items = [];

  public override pageTitle: string = 'Magic Items';

  constructor(
    private generalStoreService: GeneralStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  public override ngOnInit(): void {
    this.tabName = (this.route.snapshot.firstChild?.params ?? {})['rarity'];
    if (!this.tabName) {
      this.changeRoute(this.nameUrlEncode(this.rarities[0]));
    }

    this.items = this.generalStoreService.getMagicItems(
      this.rarities
        .map((r: string) => this.nameUrlEncode(r))
        .indexOf(this.tabName)
    );

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

    this.items = this.generalStoreService.getMagicItems(
      this.rarities
        .map((r: string) => this.nameUrlEncode(r))
        .indexOf(this.tabName)
    );
  }
}
