import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-subclass',
  templateUrl: './subclass.component.html',
  styleUrls: ['./subclass.component.scss'],
})
export class SubclassComponent implements OnInit, OnChanges {
  @Input()
  set name(name: string) {
    this.subclassName = name;
  }
  public subclassName;
  public subclass;

  public tabName: string = 'subclass';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    const className = this.route.parent.parent.snapshot.params['name'];
    this.subclass = this.dataService.getSubclass(className, this.subclassName);

    this.tabName =
      (this.route.firstChild?.snapshot?.params ?? {})['tab'] ?? 'subclass';
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const className = this.route.parent.parent.snapshot.params['name'];
    this.subclass = this.dataService.getSubclass(className, this.subclassName);

    this.tabName =
      (this.route.firstChild?.snapshot?.params ?? {})['tab'] ?? 'subclass';
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
