import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-subclass-data',
  templateUrl: './subclass-data.component.html',
  styleUrls: ['./subclass-data.component.scss'],
})
export class SubclassDataComponent implements OnInit, OnChanges {
  public subclassName;
  public subclass;

  public spellFeatureName;
  public casterLevel = 1;
  public prepared = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const className = this.route.parent.parent.parent.snapshot.params['name'];
    this.subclassName = this.route.snapshot.parent.params['name'];
    this.subclass = this.dataService.getSubclass(className, this.subclassName);

    const classData = this.dataService.getClass(className);
    this.spellFeatureName = classData.subclassSpellName;
    this.casterLevel = classData.spellcastingLevel;
    this.prepared = !classData.extraCols?.find(
      (c) => c.name === 'Spells Known'
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const className = this.route.parent.parent.parent.snapshot.params['name'];
    this.subclassName = this.route.snapshot.parent.params['name'];
    this.subclass = this.dataService.getSubclass(className, this.subclassName);

    const classData = this.dataService.getClass(className);
    this.spellFeatureName = classData.subclassSpellName;
    this.casterLevel = classData.spellcastingLevel;
    this.prepared = !classData.extraCols?.find(
      (c) => c.name === 'Spells Known'
    );
  }

  public getSubclassStartLevel(): number {
    return Math.min(
      ...Object.keys(this.subclass.features).map((k: string) =>
        parseInt(k.toString())
      )
    );
  }

  public levelKeys(object: any): string[] {
    return Object.keys(object)
      .map((l) => parseInt(l))
      .sort((a, b) => a - b)
      .map((l) => l.toString());
  }

  public levelFormatter(level: number): string {
    switch (level) {
      case 1:
        return '1st';
      case 2:
        return '2nd';
      case 3:
        return '3rd';
      default:
        return `${level}th`;
    }
  }
}
