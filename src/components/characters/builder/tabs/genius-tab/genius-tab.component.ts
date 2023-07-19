import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from 'src/components/pages/features/builder.actions';
import { selectUpdate } from 'src/components/pages/features/builder.selectors';
import { CharacterBuilderService } from 'src/services/character-builder.service';
import { CharacterSheetService } from 'src/services/character-sheet.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'cb-genius-tab',
  templateUrl: './genius-tab.component.html',
  styleUrls: ['./genius-tab.component.scss'],
})
export class GeniusTabComponent implements OnInit, OnChanges {
  @Input() character: any;
  @Input() override: boolean = false;

  public geniusUsed = 0;
  public geniusLimit = 0;
  public geniusOptions = [
    {
      name: 'Skill',
      description: '',
      choices: {
        id: '',
        type: 'skill',
        level: 1,
      },
      cost: 2,
    },
    {
      name: 'Expertise (Skill)',
      description: '',
      choices: {
        id: '',
        type: 'skill',
        level: 2,
      },
      cost: 3,
    },
    {
      name: 'Language',
      description: '',
      choices: {
        id: '',
        type: 'language',
      },
      cost: 1,
    },
    {
      name: 'Tool',
      description: '',
      choices: {
        id: '',
        type: ['game', 'instrument', 'tool'],
        level: 1,
      },
      cost: 1,
    },
    {
      name: 'Expertise (Tool)',
      description: '',
      choices: {
        id: '',
        type: ['game', 'instrument', 'tool'],
        level: 2,
      },
      cost: 2,
    },
    {
      name: 'Light Armor',
      description: '',
      granted: [
        {
          type: 'armor',
          options: ['Light'],
        },
      ],
      cost: 2,
    },
    {
      name: 'Medium Armor',
      description: '',
      granted: [
        {
          type: 'armor',
          options: ['Medium'],
        },
      ],
      cost: 3,
    },
    {
      name: 'Heavy Armor',
      description: '',
      granted: [
        {
          type: 'armor',
          options: ['Heavy'],
        },
      ],
      cost: 4,
    },
    {
      name: 'Shields',
      description: '',
      granted: [
        {
          type: 'armor',
          options: ['Shields'],
        },
      ],
      cost: 2,
    },
    {
      name: 'Simple Weapon',
      description: '',
      choices: {
        id: '',
        type: 'simple-weapon',
      },
      cost: 1,
    },
    {
      name: 'Martial Weapon',
      description: '',
      choices: {
        id: '',
        type: 'martial-weapon',
      },
      cost: 2,
    },
    {
      name: 'Exotic Weapon',
      description: '',
      choices: {
        id: '',
        type: 'exotic-weapon',
      },
      cost: 3,
    },
  ];

  constructor(
    private characterBuilderService: CharacterBuilderService,
    private characterSheetService: CharacterSheetService,
    private dataService: DataService,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.geniusOptions = this.geniusOptions.filter(
      (g: any) => g.name !== 'Feat'
    );
    if (this.override) {
      this.geniusOptions.push({
        name: 'Feat',
        description: '',
        choices: {
          id: '',
          type: 'feat',
        },
        cost: 0,
      });
    }

    this.store.select(selectUpdate).subscribe((update) => {
      this.geniusLimit =
        this.characterBuilderService.getModifier('int') *
        Math.max(
          1,
          Math.floor((this.characterBuilderService.getTotalLevel() + 4) / 4)
        );

      this.geniusUsed =
        this.character.genius?.feature?.subFeatures?.reduce(
          (partialSum, a) => partialSum + a.cost,
          0
        ) ?? 0;
    });
  }
  public ngOnChanges(): void {
    this.geniusOptions = this.geniusOptions.filter(
      (g: any) => g.name !== 'Feat'
    );
    if (this.override) {
      this.geniusOptions.push({
        name: 'Feat',
        description: '',
        choices: {
          id: '',
          type: 'feat',
        },
        cost: 0,
      });
    }
  }

  public addGenius(optionName: string): void {
    if (this.override) {
      if (!this.character.override) {
        this.character.override = {
          feature: {
            name: 'Override',
            description: '',
            subFeatures: [],
          },
          choices: [],
        };
      }

      const option = JSON.parse(
        JSON.stringify(
          this.geniusOptions.find((o: any) => o.name === optionName)
        )
      );
      option.id = this.dataService.generateUUID();
      if (option.choices) {
        option.choices.id = this.dataService.generateUUID();
      }

      this.character.override.feature.subFeatures.push(option);
      this.store.dispatch(new Update());
    } else {
      if (!this.character.genius) {
        this.character.genius = {
          feature: {
            name: 'Genius',
            description: '',
            subFeatures: [],
          },
          choices: [],
        };
      }

      const option = JSON.parse(
        JSON.stringify(
          this.geniusOptions.find((o: any) => o.name === optionName)
        )
      );
      option.id = this.dataService.generateUUID();
      if (option.choices) {
        option.choices.id = this.dataService.generateUUID();
      }

      this.geniusUsed += option.cost;

      this.character.genius.feature.subFeatures.push(option);
      this.store.dispatch(new Update());
    }
  }

  public removeGenius(featureId: string, featureCost: number): void {
    if (this.override) {
      this.character.override.feature.subFeatures =
        this.character.override.feature.subFeatures.filter(
          (f: any) => f.id !== featureId
        );

      this.store.dispatch(new Update());
    } else {
      this.character.genius.feature.subFeatures =
        this.character.genius.feature.subFeatures.filter(
          (f: any) => f.id !== featureId
        );

      this.geniusUsed -= featureCost;

      this.store.dispatch(new Update());
    }
  }
}
