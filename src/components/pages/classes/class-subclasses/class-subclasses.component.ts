import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-class-subclasses',
  templateUrl: './class-subclasses.component.html',
  styleUrls: ['./class-subclasses.component.scss'],
})
export class ClassSubclassesComponent implements OnInit {
  public subclasses: any[] = [];
  public subclassName: string = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  public ngOnInit(): void {
    const className = this.route.parent.snapshot.params['name'];
    this.subclasses = this.dataService.getClass(className).subclasses;

    this.subclassName =
      (this.route.firstChild?.snapshot?.params ?? {})['name'] ?? '';
  }

  public nameUrlEncode(name: string): string {
    return name?.replace(/[ '"\(\)!\/:,]/g, '-')?.toLowerCase() ?? '';
  }

  public changeRoute(route: string) {
    this.subclassName = route;
    this.router.navigate([`${route}/subclass`], {
      relativeTo: this.route,
      replaceUrl: true,
    });
  }
}
