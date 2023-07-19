import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { IClass, ISubclass } from 'src/app/models/data.models';
import { Update } from 'src/components/pages/features/builder.actions';
import { selectUpdate } from 'src/components/pages/features/builder.selectors';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'cb-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {
  @Input() characterClass: any;
  @Input() firstClass: boolean = false;
  @Output() removeClass = new EventEmitter<string>();

  public dataService: DataService;
  public classData: IClass;
  public subclassData: ISubclass;
  public subclassName: string = '';

  public classProfs = {
    name: 'Proficiences',
    description: '',
    subFeatures: [],
  };

  public levels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  constructor(
    dataService: DataService,
    private store: Store,
    private changeRef: ChangeDetectorRef
  ) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    this.classData = this.dataService.getClass(this.characterClass.name);

    this.store.select(selectUpdate).subscribe((update) => {
      this.subclassName = this.characterClass.subclass;
      if (this.subclassName) {
        this.subclassData = this.classData.subclasses.find(
          (s: any) => s.name === this.subclassName
        );
      }

      this.setUpClassProfs();
      this.changeRef.detectChanges();
    });
  }

  private setUpClassProfs() {
    this.classProfs.subFeatures = [];

    const armorFeature = {
      name: 'Armor',
      description: '',
    };
    const weaponFeature = {
      name: 'Weapons',
      description: '',
    };
    const saveFeature = {
      name: 'Saving Throws',
      description: '',
    };

    const skillFeature = {
      name: 'Skills',
      description: '',
      choices: [],
    };
    const toolFeature = {
      name: 'Tools',
      description: '',
      choices: [],
    };
    if (this.firstClass) {
      armorFeature.description = this.classData.proficiencies.armor.join(', ');
      weaponFeature.description =
        this.classData.proficiencies.weapons.join(', ');
      saveFeature.description =
        this.classData.proficiencies.savingThrows.join(', ');

      for (let i = 0; i < this.classData.proficiencies.numSkills; i++) {
        const choice: any = {
          id: `${this.classData.name
            .replaceAll(' ', '-')
            .toLowerCase()}-skill-${i + 1}`,
          type: 'skill',
          level: 1,
        };

        if (this.classData.proficiencies.skillChoices?.length) {
          choice.limits = this.classData.proficiencies.skillChoices;
        }

        skillFeature.choices.push(choice);
      }
      for (let i = 0; i < this.classData.proficiencies.tools.length; i++) {
        const tool = this.classData.proficiencies.tools[i];
        if (
          Array.isArray(tool) ||
          this.dataService.getGenericKeys().includes(tool)
        ) {
          const choice: any = {
            id: `${this.classData.name
              .replaceAll(' ', '-')
              .toLowerCase()}-tool-${i + 1}`,
            type: tool,
            level: 1,
          };

          toolFeature.choices.push(choice);
        } else {
          toolFeature.description += `<p>${tool}</p>`;
        }
      }
    } else {
      armorFeature.description =
        this.classData.proficiencies.multiclassArmor.join(', ');
      weaponFeature.description =
        this.classData.proficiencies.multiclassWeapons.join(', ');

      for (let i = 0; i < this.classData.proficiencies.multiclassSkills; i++) {
        const choice: any = {
          id: `${this.classData.name
            .replaceAll(' ', '-')
            .toLowerCase()}-skill-${i + 1}`,
          type: 'skill',
          level: 1,
        };

        if (this.classData.proficiencies.skillChoices?.length) {
          choice.limits = this.classData.proficiencies.skillChoices;
        }

        skillFeature.choices.push(choice);
      }
      for (
        let i = 0;
        i < this.classData.proficiencies.multiclassTools.length;
        i++
      ) {
        const tool = this.classData.proficiencies.multiclassTools[i];
        if (
          Array.isArray(tool) ||
          this.dataService.getGenericKeys().includes(tool)
        ) {
          const choice: any = {
            id: `${this.classData.name
              .replaceAll(' ', '-')
              .toLowerCase()}-tool-${i + 1}`,
            type: tool,
            level: 1,
          };

          toolFeature.choices.push(choice);
        } else {
          toolFeature.description += `<p>${tool}</p>`;
        }
      }
    }

    if (armorFeature.description !== '') {
      this.classProfs.subFeatures.push(armorFeature);
    }
    if (weaponFeature.description !== '') {
      this.classProfs.subFeatures.push(weaponFeature);
    }
    if (saveFeature.description !== '') {
      this.classProfs.subFeatures.push(saveFeature);
    }
    if (skillFeature.choices.length) {
      this.classProfs.subFeatures.push(skillFeature);
    }
    if (toolFeature.choices.length || toolFeature.description !== '') {
      this.classProfs.subFeatures.push(toolFeature);
    }
  }

  public setLevel(amount: number): void {
    this.characterClass.level += amount;
    if (this.characterClass.level <= 0) {
      this.removeClass.emit(this.characterClass.name);
    }

    this.store.dispatch(new Update());
  }

  public deleteClass(): void {
    this.removeClass.emit(this.characterClass.name);
  }

  public updateSubclass(value: string): void {
    this.characterClass.subclass = value;
    this.subclassData = this.classData.subclasses.find(
      (s: any) => s.name === value
    );

    this.store.dispatch(new Update());
  }
}
