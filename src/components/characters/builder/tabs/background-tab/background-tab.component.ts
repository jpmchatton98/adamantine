import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectUpdate,
  update,
} from 'src/components/pages/features/builder.selectors';

@Component({
  selector: 'cb-background-tab',
  templateUrl: './background-tab.component.html',
  styleUrls: ['./background-tab.component.scss'],
})
export class BackgroundTabComponent implements OnInit {
  @Input() character: any;
  @Input() characterId: string;

  constructor(private store: Store) {}

  public totalLevel = 0;

  public backgroundSkillFeature = {
    name: 'Skills',
    description: '',
    choices: [
      {
        id: 'bg-skill-1',
        type: 'skill',
        level: 1,
      },
      {
        id: 'bg-skill-2',
        type: 'skill',
        level: 1,
      },
    ],
  };
  public backgroundProfFeature = {
    name: 'Proficiencies',
    description: '',
    choices: [
      {
        id: 'bg-prof-1',
        type: ['game', 'instrument', 'language', 'tool'],
        level: 1,
      },
      {
        id: 'bg-prof-2',
        type: ['game', 'instrument', 'language', 'tool'],
        level: 1,
      },
    ],
  };
  public backgroundFeat = {
    name: 'Feat',
    description: '',
    choices: [
      {
        id: 'bg-feat',
        type: 'feat',
      },
      {
        id: 'bg-feat-4',
        type: 'feat',
        prereq: 4,
      },
    ],
  };
  public backgroundFeature = {
    name: 'Background Feature',
    description: '',
    choices: {
      id: 'bg-feature',
      type: 'bg-feature',
    },
  };

  ngOnInit(): void {
    this.store.select(selectUpdate).subscribe((update) => {
      if (update) {
        for (let c of this.character.classes ?? []) {
          this.totalLevel += c.level;
        }

        if (!this.totalLevel) {
          this.totalLevel = 1;
        }
      }
    });
  }
}
