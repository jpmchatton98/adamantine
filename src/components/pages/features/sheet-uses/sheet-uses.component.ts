import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterSheetService } from 'src/services/character-sheet.service';
import { DataService } from 'src/services/data.service';
import { Update } from '../builder.actions';
import { selectUpdate } from '../builder.selectors';

@Component({
  selector: 'app-sheet-uses',
  templateUrl: './sheet-uses.component.html',
  styleUrls: ['./sheet-uses.component.scss'],
})
export class SheetUsesComponent implements OnInit {
  @Input() uses;
  @Input() characterObj;
  @Input() characterLevel;
  @Input() characterId;

  public maxUses = 0;
  public currUses = 0;
  public checkboxes: boolean[] = [];

  public reset = 0;

  constructor(
    private characterSheetService: CharacterSheetService,
    private dataService: DataService,
    private store: Store
  ) {}

  public async ngOnInit() {
    await this.characterSheetService.getCharacterFromDb(this.characterId);

    let dataObj: any = this.dataService.getRace(this.characterObj.name);
    if (!dataObj) {
      dataObj = this.dataService.getClass(this.characterObj.name);
    }

    this.maxUses = this.characterSheetService.getMaxUsesById(
      dataObj,
      this.characterObj,
      this.uses.id,
      this.characterLevel
    );
    this.reset = this.characterSheetService.getUseResetById(
      dataObj,
      this.characterObj,
      this.uses.id,
      this.characterLevel
    );

    this.store.select(selectUpdate).subscribe((update) => {
      if (update) {
        if (this.maxUses !== -1) {
          this.currUses =
            this.characterObj.uses?.find((u) => u.id === this.uses.id)
              ?.currUses ?? this.maxUses;

          this.checkboxes = [];
          for (let i = 0; i < this.maxUses; i++) {
            this.checkboxes[i] = i < this.currUses;
          }
        }
      }
    });
  }

  public changeUses(direction: number) {
    this.currUses += direction;

    this.checkboxes = [];
    for (let i = 0; i < this.maxUses; i++) {
      this.checkboxes[i] = i < this.currUses;
    }
    this.updateUses();
  }
  public updateUses() {
    if (!this.characterObj.uses) {
      this.characterObj.uses = [
        {
          id: this.uses.id,
          currUses: this.currUses,
          maxUses: this.maxUses,
          reset: this.reset,
        },
      ];
    } else {
      const useObjIndex = this.characterObj.uses.findIndex(
        (u) => u.id === this.uses.id
      );
      if (useObjIndex !== -1) {
        this.characterObj.uses[useObjIndex].currUses = this.currUses;
        this.characterObj.uses[useObjIndex].maxUses = this.maxUses;
        this.characterObj.uses[useObjIndex].reset = this.reset;
      } else {
        this.characterObj.uses.push({
          id: this.uses.id,
          currUses: this.currUses,
          maxUses: this.maxUses,
          reset: this.reset,
        });
      }
    }
    this.store.dispatch(new Update());
  }
}
