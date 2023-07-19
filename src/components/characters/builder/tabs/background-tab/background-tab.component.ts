import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-background-tab',
  templateUrl: './background-tab.component.html',
  styleUrls: ['./background-tab.component.scss'],
})
export class BackgroundTabComponent {
  @Input() character: any;

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
    choices: {
      id: 'bg-feat',
      type: 'feat',
    },
  };
  public backgroundFeature = {
    name: 'Background Feature',
    description: '',
    choices: {
      id: 'bg-feature',
      type: 'bg-feature',
    },
  };
}
