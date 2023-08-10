import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from 'src/components/pages/features/builder.actions';
import { selectUpdate } from 'src/components/pages/features/builder.selectors';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'cb-class-tab',
  templateUrl: './class-tab.component.html',
  styleUrls: ['./class-tab.component.scss'],
})
export class ClassTabComponent {
  @Input() character: any;
  @Input() characterId: string;
  public dataService: DataService;
  public classModalVisible: boolean = false;

  constructor(
    dataService: DataService,
    private store: Store,
    private changeRef: ChangeDetectorRef
  ) {
    this.dataService = dataService;
  }
  public classes: any[] = [];

  public ngOnInit(): void {
    this.classes = this.dataService.getClasses();
    this.store.select(selectUpdate).subscribe((update) => {
      this.changeRef.detectChanges();
    });
  }

  public setClass(className: string): void {
    if (this.character.classes?.length) {
      this.character.classes.push({
        name: className,
        choices: [],
        level: 1,
        hp: [this.getHitDie(className) / 2 + 1],
      });
    } else {
      this.character.classes = [
        {
          name: className,
          choices: [],
          level: 1,
          hp: [this.getHitDie(className)],
        },
      ];
    }

    this.classModalVisible = false;
    this.store.dispatch(new Update());
  }

  public removeClass(className: string): void {
    this.character.classes = this.character.classes.filter(
      (c: any) => c.name !== className
    );
    this.store.dispatch(new Update());
  }

  public hasClass(className: string): boolean {
    return !!this.character.classes?.find((c: any) => c.name === className);
  }

  public entries(object: any): string[][] {
    return Object.entries(object);
  }

  public demiDragon(className: string): boolean {
    if (className.toLowerCase() !== 'demi-dragon') {
      return false;
    } else {
      return this.character.race?.name?.toLowerCase() !== 'demi-dragon';
    }
  }
  public getHitDie(className: string): number {
    return this.dataService.getClass(className).hitDie;
  }
}
