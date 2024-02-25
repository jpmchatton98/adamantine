import { Component, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss'],
})
export class DatabaseComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  public tabList = [
    'spells',
    'exploits',
    'races',
    'classes',
    'multiclassing',
    'backgrounds',
    'genius',
    'feats',
    'racial-feats',
    'fighting-styles',
    'transformations',
  ];
  public tabNames = {
    spells: 'Spells',
    exploits: 'Exploits',
    races: 'Races',
    classes: 'Classes',
    multiclassing: 'Multiclassing',
    backgrounds: 'Backgrounds',
    genius: 'Genius',
    feats: 'Feats',
    'racial-feats': 'Racial Feats',
    'fighting-styles': 'Fighting Styles',
    transformations: 'Transformations',
  };

  public tabName: string = 'spells';

  public ngOnInit(): void {
    this.tabName = this.route.firstChild?.snapshot?.url[0]?.path ?? 'spells';
  }

  public changeRoute(route: string) {
    this.tabName = route;
    this.router.navigate([route], {
      relativeTo: this.route,
      replaceUrl: true,
    });
  }
}
