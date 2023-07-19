import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-subraces',
  templateUrl: './subraces.component.html',
  styleUrls: ['./subraces.component.scss'],
})
export class SubracesComponent implements OnInit {
  public race;

  public tabName: string = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const raceName = this.route.parent.snapshot.params['name'];
    this.race = this.dataService.getRace(raceName);

    this.tabName =
      (this.route.firstChild?.snapshot?.params ?? {})['name'] ?? '';
  }

  public nameUrlEncode(name: string): string {
    return name?.replace(/[ '"\(\)!\/:,]/g, '-')?.toLowerCase() ?? '';
  }

  public changeRoute(route: string) {
    this.tabName = route;
    this.router.navigate([route], {
      relativeTo: this.route,
      replaceUrl: true,
    });
  }
}
