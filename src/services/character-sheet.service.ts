import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { GeneralStoreService } from './general-store.service';
import { features } from 'process';

interface SkillProf {
  id: string;
  value: string;
  level: number;
  instrument?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CharacterSheetService {
  public skillData = [
    {
      name: 'Acrobatics',
      score: 'dex',
    },
    {
      name: 'Animal Handling',
      score: 'wis',
    },
    {
      name: 'Arcana',
      score: 'int',
    },
    {
      name: 'Athletics',
      score: 'str',
    },
    {
      name: 'Brawn',
      score: 'str',
      skill: 'Intimidation',
    },
    {
      name: 'Endurance',
      score: 'con',
    },
    {
      name: 'Etiquette',
      score: 'cha',
      skill: 'Society',
    },
    {
      name: 'Deception',
      score: 'cha',
    },
    {
      name: 'History',
      score: 'int',
    },
    {
      name: 'Initiative',
      score: 'dex',
    },
    {
      name: 'Insight',
      score: 'wis',
    },
    {
      name: 'Intimidation',
      score: 'cha',
    },
    {
      name: 'Investigation',
      score: 'int',
    },
    {
      name: 'Medicine',
      score: 'wis',
    },
    {
      name: 'Nature',
      score: 'int',
    },
    {
      name: 'Perception',
      score: 'wis',
    },
    {
      name: 'Performance',
      score: 'cha',
    },
    {
      name: 'Persuasion',
      score: 'cha',
    },
    {
      name: 'Prayer',
      score: 'cha',
      skill: 'Religion',
    },
    {
      name: 'Religion',
      score: 'int',
    },
    {
      name: 'Sleight of Hand',
      score: 'dex',
    },
    {
      name: 'Society',
      score: 'int',
    },
    {
      name: 'Stealth',
      score: 'dex',
    },
    {
      name: 'Survival',
      score: 'wis',
    },
    {
      name: 'Technology',
      score: 'int',
    },
  ];
  public toolData = [
    {
      name: 'Air Vehicles',
      score: 'int',
    },
    {
      name: "Alchemist's Supplies",
      score: 'int',
    },
    {
      name: "Archeologist's Supplies",
      score: 'int',
    },
    {
      name: 'Astral Vehicles',
      score: 'int',
    },
    {
      name: "Blacksmith's Tools",
      score: 'str',
    },
    {
      name: "Brewer's Supplies",
      score: 'wis',
    },
    {
      name: "Calligrapher's Supplies",
      score: 'dex',
    },
    {
      name: "Carpenter's Tools",
      score: 'dex',
    },
    {
      name: "Cartographer's Tools",
      score: 'int',
    },
    {
      name: "Chandler's Tools",
      score: 'int',
    },
    {
      name: "Cobbler's Tools",
      score: 'dex',
    },
    {
      name: "Cook's Utensils",
      score: 'wis',
    },
    {
      name: 'Disguise Kit',
      score: 'cha',
    },
    {
      name: 'Forgery Kit',
      score: 'dex',
    },
    {
      name: "Gardener's Tools",
      score: 'wis',
    },
    {
      name: "Glassblower's Tools",
      score: 'dex',
    },
    {
      name: "Healer's Kit",
      score: 'wis',
    },
    {
      name: 'Herbalism Kit',
      score: 'wis',
    },
    {
      name: "Horologist's Tools",
      score: 'int',
    },
    {
      name: "Jeweler's Tools",
      score: 'dex',
    },
    {
      name: 'Land Vehicles',
      score: 'dex',
    },
    {
      name: "Leatherworker's Tools",
      score: 'dex',
    },
    {
      name: "Mason's Tools",
      score: 'str',
    },
    {
      name: "Navigator's Tools",
      score: 'wis',
    },
    {
      name: "Painter's Supplies",
      score: 'cha',
    },
    {
      name: "Poisoner's Kit",
      score: 'int',
    },
    {
      name: "Potter's Tools",
      score: 'cha',
    },
    {
      name: 'Surgery Kit',
      score: 'int',
    },
    {
      name: "Tailor's Tools",
      score: 'dex',
    },
    {
      name: "Thieves' Tools",
      score: 'dex',
    },
    {
      name: "Tinker's Tools",
      score: 'int',
    },
    {
      name: 'Water Vehicles',
      score: 'wis',
    },
    {
      name: "Weaver's Tools",
      score: 'dex',
    },
    {
      name: "Whitesmith's Tools",
      score: 'dex',
    },
    {
      name: "Woodcarver's Tools",
      score: 'dex',
    },
    {
      name: 'Bowling',
      score: 'dex',
    },
    {
      name: 'Darts',
      score: 'dex',
    },
    {
      name: 'Dice',
      score: 'wis',
    },
    {
      name: 'Dominoes',
      score: 'wis',
    },
    {
      name: 'Dragonchess',
      score: 'int',
    },
    {
      name: 'Playing Cards',
      score: 'wis',
    },
    { name: 'Bagpipes', score: 'cha', instrument: true },
    { name: 'Birdpipes', score: 'cha', instrument: true },
    { name: 'Drum', score: 'cha', instrument: true },
    { name: 'Dulcimer', score: 'cha', instrument: true },
    { name: 'Flute', score: 'cha', instrument: true },
    { name: 'Glaur', score: 'cha', instrument: true },
    { name: 'Hand Drum', score: 'cha', instrument: true },
    { name: 'Horn', score: 'cha', instrument: true },
    { name: 'Longhorn', score: 'cha', instrument: true },
    { name: 'Lute', score: 'cha', instrument: true },
    { name: 'Lyre', score: 'cha', instrument: true },
    { name: 'Pan Flute', score: 'cha', instrument: true },
    { name: 'Shawm', score: 'cha', instrument: true },
    { name: 'Songhorn', score: 'cha', instrument: true },
    { name: 'Tantan', score: 'cha', instrument: true },
    { name: 'Thelarr', score: 'cha', instrument: true },
    { name: 'Tocken', score: 'cha', instrument: true },
    { name: 'Viol', score: 'cha', instrument: true },
    { name: 'Wargong', score: 'cha', instrument: true },
    { name: 'Whistle-Stick', score: 'cha', instrument: true },
    { name: 'Yarting', score: 'cha', instrument: true },
    { name: 'Zulkoon', score: 'cha', instrument: true },
  ];

  public damageIcons = {
    acid: 'water',
    bludgeoning: 'hammer',
    cold: 'snowflake',
    fire: 'fire',
    force: 'magic-staff',
    lightning: 'lightning-bolt',
    necrotic: 'skull-crossbones',
    piercing: 'arrow-projectile',
    poison: 'bottle-tonic-skull',
    psychic: 'head-flash',
    radiant: 'brightness-7',
    slashing: 'sword',
    thunder: 'waveform',
  };
  public conditionIcons = {
    blinded: 'eye-off',
    broken: 'shield-remove',
    charmed: 'heart',
    deafened: 'ear-hearing-off',
    disease: 'virus',
    exhaustion: 'sleep',
    frightened: 'emoticon-frown',
    grappled: 'link-variant',
    hobbled: 'tortoise',
    incapacitated: 'account-off',
    invisible: 'ghost',
    paralyzed: 'shimmer',
    petrified: 'diamond',
    poisoned: 'bottle-tonic-skull',
    prone: 'run',
    restrained: 'handcuffs',
    stunned: 'head-snowflake',
    unconscious: 'bed',
  };
  public aoeIcons = {
    cone: 'cone',
    cube: 'cube-outline',
    cylinder: 'cylinder',
    line: 'ray-start',
    radius: 'radius-outline',
    sphere: 'sphere',
  };

  public scoreReverser = {
    strength: 'str',
    dexterity: 'dex',
    constitution: 'con',
    intelligence: 'int',
    wisdom: 'wis',
    charisma: 'cha',
    honor: 'hon',
    sanity: 'san',
  };

  public spellSlots = [
    [2],
    [3],
    [4, 2],
    [4, 2],
    [4, 3, 2],
    [4, 3, 3],
    [4, 3, 3, 1],
    [4, 3, 3, 2],
    [4, 3, 3, 3, 1],
    [4, 3, 3, 3, 2],
    [4, 3, 3, 3, 2, 1],
    [4, 3, 3, 3, 2, 1],
    [4, 3, 3, 3, 2, 1, 1],
    [4, 3, 3, 3, 2, 1, 1],
    [4, 3, 3, 3, 2, 1, 1, 1],
    [4, 3, 3, 3, 2, 1, 1, 1],
    [4, 3, 3, 3, 2, 1, 1, 1, 1],
    [4, 3, 3, 3, 3, 1, 1, 1, 1],
    [4, 3, 3, 3, 3, 2, 1, 1, 1],
    [4, 3, 3, 3, 3, 2, 2, 1, 1],
  ];
  public pactSlots = [
    [1],
    [2],
    [0, 2],
    [0, 2],
    [0, 0, 2],
    [0, 0, 2],
    [0, 0, 0, 2],
    [0, 0, 0, 2],
    [0, 0, 0, 0, 2],
    [0, 0, 0, 0, 2],
    [0, 0, 0, 0, 3],
    [0, 0, 0, 0, 3],
    [0, 0, 0, 0, 3],
    [0, 0, 0, 0, 3],
    [0, 0, 0, 0, 3],
    [0, 0, 0, 0, 3],
    [0, 0, 0, 0, 4],
    [0, 0, 0, 0, 4],
    [0, 0, 0, 0, 4],
    [0, 0, 0, 0, 4],
  ];
  public sorceryPoints = [
    4, 6, 14, 17, 17, 27, 32, 38, 44, 57, 64, 66, 66, 68, 68, 70, 70, 72, 72,
    75,
  ];
  public exploitDice = [
    2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6,
  ];
  public exploitDieSize = [
    4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10,
  ];

  constructor(
    private dataService: DataService,
    private generalStoreService: GeneralStoreService
  ) {}

  private getChoiceItems(
    choice: any,
    choices: any[],
    featureFunc: (feature: any, choices: any) => any[]
  ) {
    let skillList = [];

    const choiceEntry = choices.find((c: any) => c.id === choice?.id);
    if (choice?.type === 'trait') {
      const traits =
        choice.options?.find((o: any) => o.name === choiceEntry?.value)
          ?.traits ?? [];
      for (let trait of traits) {
        skillList = [...skillList, ...featureFunc(trait, choices)];
      }
    } else if (choice?.type === 'feat') {
      const feat = this.dataService.getFeat(choiceEntry?.value);
      if (feat) {
        skillList = [...skillList, ...featureFunc(feat, choices)];
      }
    } else if (this.dataService.getGenericListKeys().includes(choice?.type)) {
      const data = this.dataService.getGenericListItem(
        choice?.type,
        choiceEntry?.value
      );
      if (data) {
        skillList = [...skillList, ...featureFunc(data, choices)];
      }
    }

    return skillList;
  }
  private getListedItems(
    listed: any,
    choices: any[],
    featureFunc: (feature: any, choices: any) => any[]
  ) {
    let skillList = [];

    const choiceEntry = choices.find((c: any) => c.id === listed?.id);
    if (this.dataService.getGenericListKeys().includes(listed?.type)) {
      for (let item of choiceEntry?.list ?? []) {
        const data = this.dataService.getGenericListItem(listed.type, item);
        if (data) {
          skillList = [...skillList, ...featureFunc(data, choices)];
        }
      }
    } else if (this.dataService.getGenericKeys().includes(listed?.type)) {
      skillList.push(...(choiceEntry?.list ?? []));
    }

    return skillList;
  }

  public getCharacterFromCache() {
    return JSON.parse(localStorage.getItem('character'));
  }

  private getTotalLevel() {
    const character = this.getCharacterFromCache();
    if (character?.classes) {
      let level = 0;
      for (let c of character.classes) {
        level += c.level;
      }

      return level;
    }
    return 1;
  }
  private getProficiencyBonus() {
    return Math.floor(2 + (this.getTotalLevel() - 1) / 4);
  }
  private getScore(score: string): number {
    return (this.getCharacterFromCache().scores?.actual ?? {})[score] ?? 1;
  }
  private getModifier(score: string): number {
    return Math.floor((this.getScore(score) - 10) / 2);
  }

  private adjustLevels(skillProfs: SkillProf[]): SkillProf[] {
    skillProfs = skillProfs.sort((a, b) => {
      if (a.value.localeCompare(b.value) < 0) {
        return -1;
      } else if (a.value.localeCompare(b.value) === 0) {
        return b.level - a.level;
      } else {
        return 1;
      }
    });

    skillProfs = skillProfs.map((prof: SkillProf) => {
      if (prof.level === 1.5) {
        if (
          skillProfs.find(
            (p: SkillProf) => p.value === prof.value && p.level >= 1
          )
        ) {
          prof.level = 2;
        } else {
          prof.level = 1;
        }
      }

      return prof;
    });

    skillProfs = skillProfs.filter((prof: SkillProf) => {
      if (
        skillProfs.find(
          (p: SkillProf) => p.value === prof.value && p.level > prof.level
        )
      ) {
        return false;
      }
      return true;
    });

    return skillProfs;
  }

  public getCharacterSkillProficiencies(): SkillProf[] {
    let skillProfs: SkillProf[] = [];

    const character = JSON.parse(localStorage.getItem('character'));
    const skillList = this.dataService.getGeneric('skill');

    character.race?.choices?.forEach((choice) => {
      if (skillList.includes(choice.value)) {
        skillProfs.push({
          id: choice.id,
          value: choice.value,
          level: choice.level,
        });
      }
    });
    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        skillProfs.push(
          ...this.getFeatureSkillProfs(trait, character.race.choices)
        );
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        skillProfs.push(
          ...this.getFeatureSkillProfs(trait, character.race.choices)
        );
      }
    }

    character.classes?.forEach((c) => {
      c.choices.forEach((choice) => {
        if (skillList.includes(choice.value)) {
          skillProfs.push({
            id: choice.id,
            value: choice.value,
            level: choice.level,
          });
        }
      });

      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            skillProfs.push(...this.getFeatureSkillProfs(feature, c.choices));
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            skillProfs.push(...this.getFeatureSkillProfs(feature, c.choices));
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (skillList.includes(choice.value)) {
        skillProfs.push({
          id: choice.id,
          value: choice.value,
          level: choice.level,
        });
      }

      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          skillProfs.push(
            ...this.getFeatureSkillProfs(featData, character.background.choices)
          );
        }
      }
    });
    character.genius?.choices.forEach((choice) => {
      if (skillList.includes(choice.value)) {
        skillProfs.push({
          id: choice.id,
          value: choice.value,
          level: choice.level,
        });
      }
    });
    character.override?.choices.forEach((choice) => {
      if (skillList.includes(choice.value)) {
        skillProfs.push({
          id: choice.id,
          value: choice.value,
          level: choice.level,
        });
      }
    });

    skillProfs = this.adjustLevels(skillProfs);
    return skillProfs;
  }
  private getFeatureSkillProfs(feature: any, choices: any[]) {
    let skillList = [];

    feature.granted?.forEach((g) => {
      if (g.type === 'skill' && g.options && Array.isArray(g.options)) {
        skillList.push(
          ...g.options.map((o: any) => {
            return {
              id: '',
              value: o,
              level: g.level,
            };
          })
        );
      } else if (g.type === 'skill' && g.options === 'all') {
        for (let skill of this.skillData) {
          if (
            !skillList.find(
              (s) =>
                s.value === (skill.skill ?? skill.name) && s.level >= g.level
            )
          ) {
            skillList.push({
              id: '',
              value: skill.skill ?? skill.name,
              level: g.level,
            });
          }
        }
      }
    });
    feature.subFeatures?.forEach((s) => {
      skillList.push(...this.getFeatureSkillProfs(s, choices));
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        skillList = [
          ...skillList,
          ...this.getChoiceItems(
            choice,
            choices,
            this.getFeatureSkillProfs.bind(this)
          ),
        ];
      }
    } else {
      skillList = [
        ...skillList,
        ...this.getChoiceItems(
          feature.choices,
          choices,
          this.getFeatureSkillProfs.bind(this)
        ),
      ];
    }

    if (feature.listed) {
      skillList = [
        ...skillList,
        ...this.getListedItems(
          feature.listed,
          choices,
          this.getFeatureSkillProfs.bind(this)
        ),
      ];
    }

    return skillList;
  }

  public getCharacterToolProficiencies(): SkillProf[] {
    let skillProfs: SkillProf[] = [];

    const character = JSON.parse(localStorage.getItem('character'));
    const instruments = [...this.dataService.getGeneric('instrument')];
    const skillList = [
      ...this.dataService.getGeneric('game'),
      ...instruments,
      ...this.dataService.getGeneric('tool'),
    ];

    character.race?.choices?.forEach((choice) => {
      if (skillList.includes(choice.value)) {
        skillProfs.push({
          id: choice.id,
          value: choice.value,
          level: choice.level,
          instrument: instruments.includes(choice.value),
        });
      }
    });
    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        skillProfs.push(
          ...this.getFeatureToolProfs(trait, character.race.choices)
        );
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        skillProfs.push(
          ...this.getFeatureToolProfs(trait, character.race.choices)
        );
      }
    }

    character.classes?.forEach((c) => {
      c.choices.forEach((choice) => {
        if (skillList.includes(choice.value)) {
          skillProfs.push({
            id: choice.id,
            value: choice.value,
            level: choice.level,
            instrument: instruments.includes(choice.value),
          });
        }
      });

      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level: number = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            skillProfs.push(...this.getFeatureToolProfs(feature, c.choices));
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            skillProfs.push(...this.getFeatureToolProfs(feature, c.choices));
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (skillList.includes(choice.value)) {
        skillProfs.push({
          id: choice.id,
          value: choice.value,
          level: choice.level,
          instrument: instruments.includes(choice.value),
        });
      }

      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          skillProfs.push(
            ...this.getFeatureToolProfs(featData, character.background.choices)
          );
        }
      }
    });
    character.genius?.choices.forEach((choice) => {
      if (skillList.includes(choice.value)) {
        skillProfs.push({
          id: choice.id,
          value: choice.value,
          level: choice.level,
          instrument: instruments.includes(choice.value),
        });
      }
    });
    character.override?.choices.forEach((choice) => {
      if (skillList.includes(choice.value)) {
        skillProfs.push({
          id: choice.id,
          value: choice.value,
          level: choice.level,
          instrument: instruments.includes(choice.value),
        });
      }
    });

    skillProfs = this.adjustLevels(skillProfs);
    return skillProfs;
  }
  private getFeatureToolProfs(feature: any, choices: any[]) {
    let skillList = [];
    const instruments = [...this.dataService.getGeneric('instrument')];

    feature.granted?.forEach((g) => {
      if (
        ['game', 'instrument', 'tool'].includes(g.type) &&
        g.options &&
        Array.isArray(g.options)
      ) {
        skillList.push(
          ...g.options.map((o: any) => {
            return {
              id: '',
              value: o,
              level: g.level,
              instrument: instruments.includes(o),
            };
          })
        );
      } else if (
        ['game', 'instrument', 'tool'].includes(g.type) &&
        g.options === 'all'
      ) {
        for (let skill of this.toolData) {
          if (
            !skillList.find((s) => s.value === skill.name && s.level >= g.level)
          ) {
            skillList.push({
              id: '',
              value: skill.name,
              level: g.level,
            });
          }
        }
      }
    });
    feature.subFeatures?.forEach((s) => {
      skillList.push(...this.getFeatureToolProfs(s, choices));
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        skillList = [
          ...skillList,
          ...this.getChoiceItems(
            choice,
            choices,
            this.getFeatureToolProfs.bind(this)
          ),
        ];
      }
    } else {
      skillList = [
        ...skillList,
        ...this.getChoiceItems(
          feature.choices,
          choices,
          this.getFeatureToolProfs.bind(this)
        ),
      ];
    }

    if (feature.listed) {
      skillList = [
        ...skillList,
        ...this.getListedItems(
          feature.listed,
          choices,
          this.getFeatureToolProfs.bind(this)
        ),
      ];
    }

    return skillList;
  }

  public getSaveProfs() {
    let profs = {
      str: false,
      dex: false,
      con: false,
      int: false,
      wis: false,
      cha: false,
      death: false,
    };
    const character = this.getCharacterFromCache();

    character.classes.forEach((c: any, index: number) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = this.dataService.getSubclass(c.name, c.subclass);
      if (classData) {
        if (index === 0) {
          for (let save of classData.proficiencies.savingThrows) {
            profs[save] = true;
          }
        }

        for (let i = 1; i <= c.level; i++) {
          for (let feature of classData.features[i] ?? []) {
            profs = {
              ...profs,
              ...this.getSaveProfsFromFeature(feature, c.choices),
            };
          }
          if (subclassData) {
            for (let feature of subclassData.features[i] ?? []) {
              profs = {
                ...profs,
                ...this.getSaveProfsFromFeature(feature, c.choices),
              };
            }
          }
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          profs = {
            ...profs,
            ...this.getSaveProfsFromFeature(
              featData,
              character.background.choices
            ),
          };
        }
      }
    });

    return profs;
  }
  public getSaveProfsFromFeature(feature: any, choices: any[]): any {
    let profs = {};

    if (feature.granted) {
      for (let g of feature.granted) {
        if (g.type === 'save-proficiency') {
          for (let o of g.options) {
            profs[o] = true;
          }
        }
      }
    }
    if (feature.subFeatures) {
      for (let f of feature.subFeatures) {
        profs = { ...profs, ...this.getSaveProfsFromFeature(f, choices) };
      }
    }

    if (feature.choices) {
      if (Array.isArray(feature.choices)) {
        for (let c of feature.choices) {
          if (c.type === 'text' && c.grants === 'save-proficiency') {
            const choiceEntry = choices.find((ch: any) => ch.id === c.id);
            if (choiceEntry) {
              profs[choiceEntry.value] = true;
            }
          }
        }
      } else {
        if (
          feature.choices.type === 'text' &&
          feature.choices.grants === 'save-proficiency'
        ) {
          const choiceEntry = choices.find(
            (c: any) => c.id === feature.choices.id
          );
          if (choiceEntry) {
            profs[choiceEntry.value] = true;
          }
        }
      }
    }

    return profs;
  }

  public getSenses() {
    let senses = {};
    const character = this.getCharacterFromCache();

    if (character.race) {
      const raceData = this.dataService.getRace(character.race?.name);
      const subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
      if (raceData) {
        if (raceData.darkvision) {
          senses['darkvision'] = raceData.darkvision;
        }
        for (let feature of raceData.traits) {
          senses = this.getSensesFromFeature(feature, senses);
        }
        if (subraceData) {
          for (let feature of subraceData.traits) {
            senses = this.getSensesFromFeature(feature, senses);
          }
        }
      }
    }
    character.classes.forEach((c: any, index: number) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = this.dataService.getSubclass(c.name, c.subclass);
      if (classData) {
        for (let i = 1; i <= c.level; i++) {
          for (let feature of classData.features[i] ?? []) {
            senses = this.getSensesFromFeature(feature, senses);
          }
          if (subclassData) {
            for (let feature of subclassData.features[i] ?? []) {
              senses = this.getSensesFromFeature(feature, senses);
            }
          }
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          senses = this.getSensesFromFeature(featData, senses);
        }
      }
    });

    return senses;
  }
  public getSensesFromFeature(feature: any, senses: any): any {
    if (feature.granted) {
      for (let g of feature.granted) {
        if (g.type === 'darkvision') {
          if (
            (senses['darkvision'] < g.amount && senses['darkvision'] !== -1) ||
            g.amount === -1
          ) {
            senses['darkvision'] = g.amount;
          }
        } else if (g.type === 'blindsight') {
          if (
            (senses['blindsight'] < g.amount && senses['blindsight'] !== -1) ||
            g.amount === -1
          ) {
            senses['blindsight'] = g.amount;
          }
        } else if (g.type === 'tremorsense') {
          if (
            (senses['tremorsense'] < g.amount &&
              senses['tremorsense'] !== -1) ||
            g.amount === -1
          ) {
            senses['tremorsense'] = g.amount;
          }
        } else if (g.type === 'truesight') {
          if (
            (senses['truesight'] < g.amount && senses['truesight'] !== -1) ||
            g.amount === -1
          ) {
            senses['truesight'] = g.amount;
          }
        }
      }
    }
    if (feature.subFeatures) {
      for (let f of feature.subFeatures) {
        senses = this.getSensesFromFeature(f, senses);
      }
    }

    return senses;
  }

  public getCharacterSkillOverrides(): any[] {
    let skillProfs: any[] = [];

    const character = JSON.parse(localStorage.getItem('character'));
    const skillList = this.dataService.getGeneric('skill');

    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        skillProfs.push(
          ...this.getFeatureSkillOverrides(trait, character.race.choices)
        );
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        skillProfs.push(
          ...this.getFeatureSkillOverrides(trait, character.race.choices)
        );
      }
    }

    character.classes?.forEach((c) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            skillProfs.push(
              ...this.getFeatureSkillOverrides(feature, c.choices)
            );
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            skillProfs.push(
              ...this.getFeatureSkillOverrides(feature, c.choices)
            );
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          skillProfs.push(
            ...this.getFeatureSkillOverrides(
              featData,
              character.background.choices
            )
          );
        }
      }
    });

    skillProfs = this.cleanupSkillOverrides(skillProfs);
    return skillProfs;
  }
  private getFeatureSkillOverrides(feature: any, choices: any[]) {
    let skillList = [];

    feature.granted?.forEach((g) => {
      if (g.type === 'skill-ability') {
        skillList.push(g);
      }
    });
    feature.subFeatures?.forEach((s) => {
      skillList.push(...this.getFeatureSkillOverrides(s, choices));
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        skillList = [
          ...skillList,
          ...this.getChoiceItems(
            choice,
            choices,
            this.getFeatureSkillOverrides.bind(this)
          ),
        ];
      }
    } else {
      skillList = [
        ...skillList,
        ...this.getChoiceItems(
          feature.choices,
          choices,
          this.getFeatureSkillOverrides.bind(this)
        ),
      ];
    }

    if (feature.listed) {
      skillList = [
        ...skillList,
        ...this.getListedItems(
          feature.listed,
          choices,
          this.getFeatureSkillOverrides.bind(this)
        ),
      ];
    }

    return skillList;
  }
  private cleanupSkillOverrides(skills: any[]): any[] {
    const newSkills = [];
    for (let skill of skills) {
      const id = newSkills.findIndex((s) => s.skill === skill.skill);
      if (id !== -1) {
        newSkills[id].abilities = [
          ...new Set([...newSkills[id].abilities, skill.ability]),
        ];
      } else {
        newSkills.push({
          skill: skill.skill,
          abilities: [skill.ability],
        });
      }
    }

    return newSkills;
  }

  public getCharacterToolOverrides(): any[] {
    let skillProfs: any[] = [];

    const character = JSON.parse(localStorage.getItem('character'));
    const skillList = this.dataService.getGeneric('skill');

    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        skillProfs.push(
          ...this.getFeatureToolOverrides(trait, character.race.choices)
        );
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        skillProfs.push(
          ...this.getFeatureToolOverrides(trait, character.race.choices)
        );
      }
    }

    character.classes?.forEach((c) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            skillProfs.push(
              ...this.getFeatureToolOverrides(feature, c.choices)
            );
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            skillProfs.push(
              ...this.getFeatureToolOverrides(feature, c.choices)
            );
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          skillProfs.push(
            ...this.getFeatureToolOverrides(
              featData,
              character.background.choices
            )
          );
        }
      }
    });

    skillProfs = this.cleanupToolOverrides(skillProfs);
    return skillProfs;
  }
  private getFeatureToolOverrides(feature: any, choices: any[]) {
    let skillList = [];

    feature.granted?.forEach((g) => {
      if (g.type === 'tool-ability') {
        skillList.push(g);
      }
    });
    feature.subFeatures?.forEach((s) => {
      skillList.push(...this.getFeatureToolOverrides(s, choices));
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        skillList = [
          ...skillList,
          ...this.getChoiceItems(
            choice,
            choices,
            this.getFeatureToolOverrides.bind(this)
          ),
        ];
      }
    } else {
      skillList = [
        ...skillList,
        ...this.getChoiceItems(
          feature.choices,
          choices,
          this.getFeatureToolOverrides.bind(this)
        ),
      ];
    }

    if (feature.listed) {
      skillList = [
        ...skillList,
        ...this.getListedItems(
          feature.listed,
          choices,
          this.getFeatureToolOverrides.bind(this)
        ),
      ];
    }

    return skillList;
  }
  private cleanupToolOverrides(skills: any[]): any[] {
    const newSkills = [];
    for (let skill of skills) {
      const id = newSkills.findIndex((s) => s.tool === skill.tool);
      if (id !== -1) {
        newSkills[id].abilities = [
          ...new Set([...newSkills[id].abilities, skill.ability]),
        ];
      } else {
        newSkills.push({
          tool: skill.tool,
          abilities: [skill.ability],
        });
      }
    }

    return newSkills;
  }

  public getCharacterSpells(): any[] {
    let spellList: any[] = [];

    const character = JSON.parse(localStorage.getItem('character'));

    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        spellList.push(
          ...this.getFeatureSpells(
            trait,
            character.race.choices,
            this.getTotalLevel(),
            0,
            [raceData.name]
          )
        );
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        spellList.push(
          ...this.getFeatureSpells(
            trait,
            character.race.choices,
            this.getTotalLevel(),
            0,
            [raceData.name, subraceData.name]
          )
        );
      }
    }

    character.classes?.forEach((c) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            spellList.push(
              ...this.getFeatureSpells(
                feature,
                c.choices,
                c.level,
                classData.spellcastingLevel,
                [classData.name]
              )
            );
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            spellList.push(
              ...this.getFeatureSpells(
                feature,
                c.choices,
                c.level,
                classData.spellcastingLevel,
                [classData.name, subclassData.name]
              )
            );
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          spellList.push(
            ...this.getFeatureSpells(
              featData,
              character.background.choices,
              this.getTotalLevel(),
              0,
              ['Background']
            )
          );
        }
      }
    });

    const splitSpells: any[] = [];
    for (let i = 0; i < 10; i++) {
      if (
        spellList.find((s: any) => {
          const spellData = this.dataService.getSpell(s.spell);
          return spellData?.level === i;
        })
      ) {
        let name = '';
        if (i === 0) {
          name = 'Cantrips';
        } else {
          switch (i) {
            case 1:
              name = '1st';
              break;
            case 2:
              name = '2nd';
              break;
            case 3:
              name = '3rd';
              break;
            default:
              name = `${i}th`;
              break;
          }
          name += '-level';
        }

        splitSpells.push({
          name: name,
          spells: spellList
            .map((s: any) => {
              const spellData = this.dataService.getSpell(s.spell);
              return {
                spell: spellData,
                ability: s.ability,
                source: s.source,
              };
            })
            .filter((s: any) => {
              return s.spell?.level === i;
            })
            .sort((a, b) => {
              const nameSort = a.spell.name.localeCompare(b.spell.name);
              if (nameSort < 0) {
                return -1;
              } else if (nameSort === 0) {
                return (
                  a.source?.join('')?.localeCompare(b.source?.join('')) ?? 0
                );
              } else {
                return 1;
              }
            }),
        });
      }
    }

    return splitSpells;
  }
  private getFeatureSpells(
    feature: any,
    choices: any[],
    characterLevel: number,
    spellcasterType: number = 0,
    source: string[]
  ) {
    let spellList = [];

    let maxSpellLevel = 0;
    if (spellcasterType === 0) {
      maxSpellLevel = 10;
    } else {
      maxSpellLevel = Math.ceil(characterLevel / (spellcasterType * 2));
    }

    feature.granted?.forEach((g) => {
      if (g.type === 'spell') {
        let ability = g.ability;
        if (ability?.includes('-')) {
          const choiceEntry = choices.find((c: any) => c.id === ability);
          ability = choiceEntry?.value ?? '';
        }

        for (let spell of g.options) {
          const spellData = this.dataService.getSpell(spell);
          if (spellData.level <= maxSpellLevel || g.ignoreMaxLevel) {
            spellList.push({
              spell,
              ability,
              source,
            });
          }
        }
      }
    });
    feature.subFeatures?.forEach((s) => {
      spellList.push(
        ...this.getFeatureSpells(
          s,
          choices,
          characterLevel,
          spellcasterType,
          source
        )
      );
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        spellList = [
          ...spellList,
          ...this.getChoiceSpells(
            choice,
            choices,
            characterLevel,
            spellcasterType,
            source
          ),
        ];
      }
    } else {
      spellList = [
        ...spellList,
        ...this.getChoiceSpells(
          feature.choices,
          choices,
          characterLevel,
          spellcasterType,
          source
        ),
      ];
    }

    if (feature.listed) {
      spellList = [
        ...spellList,
        ...this.getListedSpells(
          feature.listed,
          choices,
          characterLevel,
          spellcasterType,
          source
        ),
      ];
    }

    return spellList;
  }
  private getChoiceSpells(
    choice: any,
    choices: any[],
    characterLevel: number,
    spellcasterType: number = 0,
    source: string[]
  ) {
    let spellList = [];

    let maxSpellLevel = 0;
    if (spellcasterType === 0) {
      maxSpellLevel = 10;
    } else {
      maxSpellLevel = Math.ceil(characterLevel / (spellcasterType * 2));
    }

    const choiceEntry = choices.find((c: any) => c.id === choice?.id);
    if (choice?.type === 'trait') {
      const traits =
        choice.options?.find((o: any) => o.name === choiceEntry?.value)
          ?.traits ?? [];
      for (let trait of traits) {
        spellList = [
          ...spellList,
          ...this.getFeatureSpells(
            trait,
            choices,
            characterLevel,
            spellcasterType,
            [...source, trait.name]
          ),
        ];
      }
    } else if (choice?.type === 'feat') {
      const feat = this.dataService.getFeat(choiceEntry?.value);
      if (feat) {
        spellList = [
          ...spellList,
          ...this.getFeatureSpells(
            feat,
            choices,
            characterLevel,
            spellcasterType,
            [...source, feat.name]
          ),
        ];
      }
    } else if (this.dataService.getGenericListKeys().includes(choice?.type)) {
      const data = this.dataService.getGenericListItem(
        choice?.type,
        choiceEntry?.value
      );
      if (data) {
        spellList = [
          ...spellList,
          ...this.getFeatureSpells(
            data,
            choices,
            characterLevel,
            spellcasterType,
            [...source, data.name]
          ),
        ];
      }
    } else if (choice?.type === 'spell') {
      let ability = choice.ability;
      if (ability.includes('-')) {
        const choiceEntry = choices.find((c: any) => c.id === ability);
        ability = choiceEntry?.value ?? '';
      }

      const choiceEntry = choices.find((c: any) => c.id === choice.id);
      const spellData = this.dataService.getSpell(choiceEntry?.value);
      if (spellData) {
        if (spellData.level <= maxSpellLevel || choice.ignoreMaxLevel) {
          if (choice.id === 'signature-cantrip') {
            source = [...source, 'Signature Cantrip'];
          }
          spellList.push({
            spell: choiceEntry.value,
            ability,
            source,
          });
        }
      }
    }

    return spellList;
  }
  private getListedSpells(
    listed: any,
    choices: any[],
    characterLevel: number,
    spellcasterType: number = 0,
    source: string[]
  ) {
    let spellList = [];

    let maxSpellLevel = 0;
    if (spellcasterType === 0) {
      maxSpellLevel = 10;
    } else {
      maxSpellLevel = Math.ceil(characterLevel / (spellcasterType * 2));
    }

    if (this.dataService.getGenericListKeys().includes(listed?.type)) {
      const choiceEntry = choices.find((c: any) => c.id === listed?.id);

      for (let item of choiceEntry?.list ?? []) {
        const data = this.dataService.getGenericListItem(listed.type, item);
        if (data) {
          spellList = [
            ...spellList,
            ...this.getFeatureSpells(
              data,
              choices,
              characterLevel,
              spellcasterType,
              [...source, data.name]
            ),
          ];
        }
      }
    } else if (listed.type === 'cantrip' || listed.type === 'spell') {
      let ability = listed.ability;
      if (ability.includes('-')) {
        const choiceEntry = choices.find((c: any) => c.id === ability);
        ability = choiceEntry?.value ?? '';
      }

      const choiceEntry = choices.find((c: any) => c.id === listed.id);
      for (let l of choiceEntry?.list ?? []) {
        const spellData = this.dataService.getSpell(l);
        if (spellData.level <= maxSpellLevel || listed.ignoreMaxLevel) {
          spellList.push({
            spell: l,
            ability,
            source,
          });
        }
      }
    }

    return spellList;
  }

  public getCharacterExploits(): any[] {
    let exploitList: any[] = [];

    const character = JSON.parse(localStorage.getItem('character'));

    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        exploitList.push(
          ...this.getFeatureExploits(
            trait,
            character.race.choices,
            this.getTotalLevel(),
            0,
            [raceData.name]
          )
        );
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        exploitList.push(
          ...this.getFeatureExploits(
            trait,
            character.race.choices,
            this.getTotalLevel(),
            0,
            [raceData.name, subraceData.name]
          )
        );
      }
    }

    character.classes?.forEach((c) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            exploitList.push(
              ...this.getFeatureExploits(
                feature,
                c.choices,
                c.level,
                classData.exploitLevel,
                [classData.name]
              )
            );
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            exploitList.push(
              ...this.getFeatureExploits(
                feature,
                c.choices,
                c.level,
                classData.exploitLevel,
                [classData.name, subclassData.name]
              )
            );
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          exploitList.push(
            ...this.getFeatureExploits(
              featData,
              character.background.choices,
              this.getTotalLevel(),
              0,
              ['Background']
            )
          );
        }
      }
    });

    const splitExploits: any[] = [];
    for (let i = 0; i < 5; i++) {
      if (
        exploitList.find((e: any) => {
          const exploitData = this.dataService.getExploitData(e.exploit);
          return exploitData?.degree === i;
        })
      ) {
        let name = '';
        switch (i) {
          case 1:
            name = '1st';
            break;
          case 2:
            name = '2nd';
            break;
          case 3:
            name = '3rd';
            break;
          default:
            name = `${i}th`;
            break;
        }
        name += '-Degree';

        splitExploits.push({
          name: name,
          exploits: exploitList
            .map((e: any) => {
              const exploitData = this.dataService.getExploitData(e.exploit);

              if (exploitData?.save?.length > 3) {
                exploitData.save =
                  this.scoreReverser[exploitData.save.toLowerCase()];
              }
              return {
                exploit: exploitData,
                ability: e.ability,
                source: e.source,
              };
            })
            .filter((e: any) => {
              return e.exploit?.degree === i;
            })
            .sort((a, b) => {
              const nameSort = a.exploit.name.localeCompare(b.exploit.name);
              if (nameSort < 0) {
                return -1;
              } else if (nameSort === 0) {
                return (
                  a.source?.join('')?.localeCompare(b.source?.join('')) ?? 0
                );
              } else {
                return 1;
              }
            }),
        });
      }
    }

    return splitExploits;
  }
  private getFeatureExploits(
    feature: any,
    choices: any[],
    characterLevel: number,
    exploitType: number = 0,
    source: string[]
  ) {
    let exploitList = [];

    let maxExploitDegree = 0;
    if (exploitType === 0) {
      maxExploitDegree = 6;
    } else {
      maxExploitDegree = Math.ceil(characterLevel / (exploitType * 4));
    }

    feature.granted?.forEach((g) => {
      if (g.type === 'exploit') {
        let ability = g.ability;
        if (ability.includes('-')) {
          const choiceEntry = choices.find((c: any) => c.id === ability);
          ability = choiceEntry?.value ?? '';
        }

        for (let exploit of g.options) {
          const exploitData = this.dataService.getExploit(exploit);
          if (exploitData.degree <= maxExploitDegree || g.ignoreMaxLevel) {
            exploitList.push({
              exploit,
              ability,
              source,
            });
          }
        }
      }
    });
    feature.subFeatures?.forEach((s) => {
      exploitList.push(
        ...this.getFeatureExploits(
          s,
          choices,
          characterLevel,
          exploitType,
          source
        )
      );
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        exploitList = [
          ...exploitList,
          ...this.getChoiceExploits(
            choice,
            choices,
            characterLevel,
            exploitType,
            source
          ),
        ];
      }
    } else {
      exploitList = [
        ...exploitList,
        ...this.getChoiceExploits(
          feature.choices,
          choices,
          characterLevel,
          exploitType,
          source
        ),
      ];
    }

    if (feature.listed) {
      exploitList = [
        ...exploitList,
        ...this.getListedExploits(
          feature.listed,
          choices,
          characterLevel,
          exploitType,
          source
        ),
      ];
    }

    return exploitList;
  }
  private getChoiceExploits(
    choice: any,
    choices: any[],
    characterLevel: number,
    exploitType: number = 0,
    source: string[]
  ) {
    let exploitList = [];

    let maxExploitDegree = 0;
    if (exploitType === 0) {
      maxExploitDegree = 6;
    } else {
      maxExploitDegree = Math.ceil(characterLevel / (exploitType * 4));
    }

    const choiceEntry = choices.find((c: any) => c.id === choice?.id);
    if (choice?.type === 'trait') {
      const traits =
        choice.options?.find((o: any) => o.name === choiceEntry?.value)
          ?.traits ?? [];
      for (let trait of traits) {
        exploitList = [
          ...exploitList,
          ...this.getFeatureSpells(
            trait,
            choices,
            characterLevel,
            exploitType,
            [...source, trait.name]
          ),
        ];
      }
    } else if (choice?.type === 'feat') {
      const feat = this.dataService.getFeat(choiceEntry?.value);
      if (feat) {
        exploitList = [
          ...exploitList,
          ...this.getFeatureSpells(feat, choices, characterLevel, exploitType, [
            ...source,
            feat.name,
          ]),
        ];
      }
    } else if (this.dataService.getGenericListKeys().includes(choice?.type)) {
      const data = this.dataService.getGenericListItem(
        choice?.type,
        choiceEntry?.value
      );
      if (data) {
        exploitList = [
          ...exploitList,
          ...this.getFeatureSpells(data, choices, characterLevel, exploitType, [
            ...source,
            data.name,
          ]),
        ];
      }
    } else if (choice?.type === 'exploit') {
      let ability = choice.ability;
      if (ability.includes('-')) {
        const choiceEntry = choices.find((c: any) => c.id === ability);
        ability = choiceEntry?.value ?? '';
      }

      const choiceEntry = choices.find((c: any) => c.id === choice.id);

      const exploitData = this.dataService.getExploit(choiceEntry?.value);
      if (exploitData) {
        if (exploitData.degree <= maxExploitDegree || choice.ignoreMaxLevel) {
          exploitList.push({
            exploit: choiceEntry?.value,
            ability,
            source,
          });
        }
      }
    }

    return exploitList;
  }
  private getListedExploits(
    listed: any,
    choices: any[],
    characterLevel: number,
    exploitType: number = 0,
    source: string[]
  ) {
    let exploitList = [];

    let maxExploitDegree = 0;
    if (exploitType === 0) {
      maxExploitDegree = 6;
    } else {
      maxExploitDegree = Math.ceil(characterLevel / (exploitType * 4));
    }

    if (this.dataService.getGenericListKeys().includes(listed?.type)) {
      const choiceEntry = choices.find((c: any) => c.id === listed?.id);

      for (let item of choiceEntry?.list ?? []) {
        const data = this.dataService.getGenericListItem(listed.type, item);
        if (data) {
          exploitList = [
            ...exploitList,
            ...this.getFeatureSpells(
              data,
              choices,
              characterLevel,
              exploitType,
              [...source, data.name]
            ),
          ];
        }
      }
    } else if (listed.type === 'exploit') {
      let ability = listed.ability;
      if (ability.includes('-')) {
        const choiceEntry = choices.find((c: any) => c.id === ability);
        ability = choiceEntry?.value ?? '';
      }

      const choiceEntry = choices.find((c: any) => c.id === listed.id);
      for (let l of choiceEntry?.list ?? []) {
        const exploitData = this.dataService.getExploit(l);
        if (exploitData.degree <= maxExploitDegree || listed.ignoreMaxLevel) {
          exploitList.push({
            exploit: l,
            ability,
            source,
          });
        }
      }
    }

    return exploitList;
  }

  public getCharacterProficiencies(): any {
    return {
      armor: this.getCharacterArmorProfs(),
      languages: this.getCharacterLanguageProfs(),
      weapons: this.getCharacterWeaponProfs(),
    };
  }
  private getCharacterArmorProfs(): any[] {
    let profs: any[] = [];

    const character = JSON.parse(localStorage.getItem('character'));

    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        profs = [
          ...profs,
          ...this.getFeatureArmorProfs(trait, character.race.choices),
        ];
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        profs = [
          ...profs,
          ...this.getFeatureArmorProfs(trait, character.race.choices),
        ];
      }
    }

    character.classes?.forEach((c, index) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level: number = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            profs = [
              ...profs,
              ...this.getFeatureArmorProfs(feature, c.choices),
            ];
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            profs = [
              ...profs,
              ...this.getFeatureArmorProfs(feature, c.choices),
            ];
          });
        }

        if (index === 0) {
          for (let armor of classData.proficiencies.armor) {
            profs.push(armor);
          }
        } else {
          for (let armor of classData.proficiencies.multiclassArmor) {
            profs.push(armor);
          }
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          profs = [
            ...profs,
            ...this.getFeatureArmorProfs(
              featData,
              character.background.choices
            ),
          ];
        }
      }
    });

    profs = [...new Set(profs)];
    profs = profs.sort();

    return profs;
  }
  private getFeatureArmorProfs(feature: any, choices: any[]): any {
    let profs = [];

    feature.granted?.forEach((g) => {
      if (g.type === 'armor') {
        profs = [...profs, ...g.options];
      }
    });
    feature.subFeatures?.forEach((s) => {
      profs.push(...this.getFeatureToolProfs(s, choices));
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        profs = [
          ...profs,
          ...this.getChoiceItems(
            choice,
            choices,
            this.getFeatureArmorProfs.bind(this)
          ),
        ];
      }
    } else {
      profs = [
        ...profs,
        ...this.getChoiceItems(
          feature.choices,
          choices,
          this.getFeatureArmorProfs.bind(this)
        ),
      ];
    }

    if (feature.listed) {
      profs = [
        ...profs,
        ...this.getListedItems(
          feature.listed,
          choices,
          this.getFeatureArmorProfs.bind(this)
        ),
      ];
    }

    return profs;
  }

  private getCharacterLanguageProfs(): any[] {
    let profs: any[] = [];

    const character = JSON.parse(localStorage.getItem('character'));
    const languageList = this.dataService.getGeneric('language');

    character.race?.choices?.forEach((choice) => {
      if (languageList.includes(choice.value)) {
        profs.push(choice.value);
      }
    });
    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        profs = [
          ...profs,
          ...this.getFeatureLanguageProfs(trait, character.race.choices),
        ];
      }

      for (let language of raceData.languages) {
        if (!language['id']) {
          profs.push(language);
        }
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        profs = [
          ...profs,
          ...this.getFeatureLanguageProfs(trait, character.race.choices),
        ];
      }
    }

    character.classes?.forEach((c) => {
      c.choices.forEach((choice) => {
        if (languageList.includes(choice.value)) {
          profs.push(choice.value);
        }
      });

      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level: number = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            profs = [
              ...profs,
              ...this.getFeatureLanguageProfs(feature, c.choices),
            ];
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            profs = [
              ...profs,
              ...this.getFeatureLanguageProfs(feature, c.choices),
            ];
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (languageList.includes(choice.value)) {
        profs.push(choice.value);
      }
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          profs = [
            ...profs,
            ...this.getFeatureLanguageProfs(
              featData,
              character.background.choices
            ),
          ];
        }
      }
    });
    character.genius?.choices?.forEach((choice) => {
      if (languageList.includes(choice.value)) {
        profs.push(choice.value);
      }
    });
    character.override?.choices?.forEach((choice) => {
      if (languageList.includes(choice.value)) {
        profs.push(choice.value);
      }
    });

    profs = [...new Set(profs)];
    profs = profs.sort();

    return profs;
  }
  private getFeatureLanguageProfs(feature: any, choices: any[]): any {
    let profs = [];

    feature.granted?.forEach((g) => {
      if (g.type === 'language') {
        profs = [...profs, ...g.options];
      }
    });
    feature.subFeatures?.forEach((s) => {
      profs.push(...this.getFeatureToolProfs(s, choices));
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        profs = [
          ...profs,
          ...this.getChoiceItems(
            choice,
            choices,
            this.getFeatureLanguageProfs.bind(this)
          ),
        ];
      }
    } else {
      profs = [
        ...profs,
        ...this.getChoiceItems(
          feature.choices,
          choices,
          this.getFeatureLanguageProfs.bind(this)
        ),
      ];
    }

    if (feature.listed) {
      profs = [
        ...profs,
        ...this.getListedItems(
          feature.listed,
          choices,
          this.getFeatureLanguageProfs.bind(this)
        ),
      ];
    }

    profs = [...new Set(profs)];

    const filterOut = [];
    for (let weapon of profs) {
      const weaponData = this.generalStoreService.getItem(weapon);
      if (weaponData) {
        switch (weaponData.type) {
          case 0:
            if (
              profs.findIndex((p: any) => p.toLowerCase() === 'simple') !== -1
            ) {
              filterOut.push(weapon);
            }
            break;
          case 1:
            if (
              profs.findIndex((p: any) => p.toLowerCase() === 'martial') !== -1
            ) {
              filterOut.push(weapon);
            }
            break;
          case 2:
            if (
              profs.findIndex((p: any) => p.toLowerCase() === 'exotic') !== -1
            ) {
              filterOut.push(weapon);
            }
            break;
        }
      }
    }
    profs = profs.filter((p: any) => !filterOut.includes(p));
    profs = profs.sort();

    return profs;
  }

  private getCharacterWeaponProfs(): any[] {
    let profs: any[] = [];

    const character = JSON.parse(localStorage.getItem('character'));

    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        profs = [
          ...profs,
          ...this.getFeatureWeaponProfs(trait, character.race.choices),
        ];
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        profs = [
          ...profs,
          ...this.getFeatureWeaponProfs(trait, character.race.choices),
        ];
      }
    }

    character.classes?.forEach((c, index) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level: number = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            profs = [
              ...profs,
              ...this.getFeatureWeaponProfs(feature, c.choices),
            ];
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            profs = [
              ...profs,
              ...this.getFeatureWeaponProfs(feature, c.choices),
            ];
          });
        }

        if (index === 0) {
          for (let weapon of classData.proficiencies.weapons) {
            profs.push(weapon);
          }
        } else {
          for (let weapon of classData.proficiencies.multiclassWeapons) {
            profs.push(weapon);
          }
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          profs = [
            ...profs,
            ...this.getFeatureWeaponProfs(
              featData,
              character.background.choices
            ),
          ];
        }
      }
    });

    return profs;
  }
  private getFeatureWeaponProfs(feature: any, choices: any[]): any {
    let profs = [];

    feature.granted?.forEach((g) => {
      if (g.type === 'weapon') {
        profs = [...profs, ...g.options];
      }
    });
    feature.subFeatures?.forEach((s) => {
      profs.push(...this.getFeatureToolProfs(s, choices));
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        profs = [
          ...profs,
          ...this.getChoiceItems(
            choice,
            choices,
            this.getFeatureWeaponProfs.bind(this)
          ),
        ];
      }
    } else {
      profs = [
        ...profs,
        ...this.getChoiceItems(
          feature.choices,
          choices,
          this.getFeatureWeaponProfs.bind(this)
        ),
      ];
    }

    if (feature.listed) {
      profs = [
        ...profs,
        ...this.getListedItems(
          feature.listed,
          choices,
          this.getFeatureWeaponProfs.bind(this)
        ),
      ];
    }

    return profs;
  }

  public getCharacterDefenses(): any {
    return {
      damage: this.getCharacterDamageDefenses(),
      condition: this.getCharacterConditionDefenses(),
    };
  }
  public getCharacterDamageDefenses(): any[] {
    let damageDefenses = [];

    const character = JSON.parse(localStorage.getItem('character'));

    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        damageDefenses = [
          ...damageDefenses,
          ...this.getFeatureDamageDefenses(trait, character.race.choices),
        ];
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        damageDefenses = [
          ...damageDefenses,
          ...this.getFeatureDamageDefenses(trait, character.race.choices),
        ];
      }
    }

    character.classes?.forEach((c, index) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level: number = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            damageDefenses = [
              ...damageDefenses,
              ...this.getFeatureDamageDefenses(feature, c.choices),
            ];
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            damageDefenses = [
              ...damageDefenses,
              ...this.getFeatureDamageDefenses(feature, c.choices),
            ];
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          damageDefenses = [
            ...damageDefenses,
            ...this.getFeatureDamageDefenses(
              featData,
              character.background.choices
            ),
          ];
        }
      }
    });

    damageDefenses = damageDefenses.sort((a, b) => {
      if (a.type.localeCompare(b.type) < 0) {
        return -1;
      } else if (a.type.localeCompare(b.type) === 0) {
        return a.level - b.level;
      } else {
        return 1;
      }
    });

    return damageDefenses.reduce((acc, curr) => {
      const existingDefense = acc.find((attack) => attack.type === curr.type);

      if (existingDefense) {
        if (curr.level > existingDefense.level) {
          existingDefense.level = curr.level;
        }
      } else {
        acc.push(curr);
      }

      return acc;
    }, []);
  }
  public getFeatureDamageDefenses(feature: any, choices: any[]): any[] {
    let damageDefenses = [];

    feature.granted?.forEach((g) => {
      if (g.type === 'damage-resistance') {
        for (let o of g.options) {
          damageDefenses.push({
            type: o.toLowerCase(),
            level: 1,
          });
        }
      } else if (g.type === 'damage-immunity') {
        for (let o of g.options) {
          damageDefenses.push({
            type: o.toLowerCase(),
            level: 2,
          });
        }
      }
    });
    feature.subFeatures?.forEach((s) => {
      damageDefenses.push(...this.getFeatureDamageDefenses(s, choices));
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        damageDefenses = [
          ...damageDefenses,
          ...this.getChoiceDamageDefenses(choice, choices),
        ];
      }
    } else {
      damageDefenses = [
        ...damageDefenses,
        ...this.getChoiceDamageDefenses(feature.choices, choices),
      ];
    }

    if (feature.listed) {
      damageDefenses = [
        ...damageDefenses,
        ...this.getListedDamageDefenses(feature.listed, choices),
      ];
    }

    return damageDefenses;
  }
  private getChoiceDamageDefenses(choice: any, choices: any[]) {
    let damageDefenses = [];

    const choiceEntry = choices.find((c: any) => c.id === choice?.id);
    if (choice?.type === 'trait') {
      const traits =
        choice.options?.find((o: any) => o.name === choiceEntry?.value)
          ?.traits ?? [];
      for (let trait of traits) {
        damageDefenses = [
          ...damageDefenses,
          ...this.getFeatureDamageDefenses(trait, choices),
        ];
      }
    } else if (choice?.type === 'feat') {
      const feat = this.dataService.getFeat(choiceEntry?.value);
      if (feat) {
        damageDefenses = [
          ...damageDefenses,
          ...this.getFeatureDamageDefenses(feat, choices),
        ];
      }
    } else if (this.dataService.getGenericListKeys().includes(choice?.type)) {
      const data = this.dataService.getGenericListItem(
        choice?.type,
        choiceEntry?.value
      );
      if (data) {
        damageDefenses = [
          ...damageDefenses,
          ...this.getFeatureDamageDefenses(data, choices),
        ];
      }
    } else if (
      choice?.type === 'text' &&
      choice?.grants === 'damage-resistance'
    ) {
      damageDefenses.push({
        type: choiceEntry.value.toLowerCase(),
        level: 1,
      });
    } else if (
      choice?.type === 'text' &&
      choice?.grants === 'damage-immunity'
    ) {
      damageDefenses.push({
        type: choiceEntry.value.toLowerCase(),
        level: 2,
      });
    }

    return damageDefenses;
  }
  private getListedDamageDefenses(listed: any, choices: any[]): any[] {
    let damageDefenses = [];

    const choiceEntry = choices.find((c: any) => c.id === listed?.id);
    if (this.dataService.getGenericListKeys().includes(listed?.type)) {
      for (let item of choiceEntry?.list ?? []) {
        const data = this.dataService.getGenericListItem(listed.type, item);
        if (data) {
          damageDefenses = [
            ...damageDefenses,
            ...this.getFeatureDamageDefenses(data, choices),
          ];
        }
      }
    } else if (this.dataService.getGenericKeys().includes(listed?.type)) {
      damageDefenses.push(...(choiceEntry?.list ?? []));
    }

    return damageDefenses;
  }

  public getCharacterConditionDefenses(): any[] {
    let conditionDefenses = [];

    const character = JSON.parse(localStorage.getItem('character'));

    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        conditionDefenses = [
          ...conditionDefenses,
          ...this.getFeatureConditionDefenses(trait, character.race.choices),
        ];
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        conditionDefenses = [
          ...conditionDefenses,
          ...this.getFeatureConditionDefenses(trait, character.race.choices),
        ];
      }
    }

    character.classes?.forEach((c, index) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level: number = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            conditionDefenses = [
              ...conditionDefenses,
              ...this.getFeatureConditionDefenses(feature, c.choices),
            ];
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            conditionDefenses = [
              ...conditionDefenses,
              ...this.getFeatureConditionDefenses(feature, c.choices),
            ];
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          conditionDefenses = [
            ...conditionDefenses,
            ...this.getFeatureConditionDefenses(
              featData,
              character.background.choices
            ),
          ];
        }
      }
    });

    conditionDefenses = conditionDefenses.sort((a, b) => {
      if (a.type.localeCompare(b.type) < 0) {
        return -1;
      } else if (a.type.localeCompare(b.type) === 0) {
        return a.level - b.level;
      } else {
        return 1;
      }
    });

    return conditionDefenses.reduce((acc, curr) => {
      const existingDefense = acc.find((attack) => attack.type === curr.type);

      if (existingDefense) {
        if (curr.level > existingDefense.level) {
          existingDefense.level = curr.level;
        }
      } else {
        acc.push(curr);
      }

      return acc;
    }, []);
  }
  public getFeatureConditionDefenses(feature: any, choices: any[]): any[] {
    let conditionDefenses = [];

    feature.granted?.forEach((g) => {
      if (g.type === 'condition-advantage') {
        for (let o of g.options) {
          conditionDefenses.push({
            type: o.toLowerCase(),
            level: 1,
          });
        }
      } else if (g.type === 'condition-immunity') {
        for (let o of g.options) {
          conditionDefenses.push({
            type: o.toLowerCase(),
            level: 2,
          });
        }
      }
    });
    feature.subFeatures?.forEach((s) => {
      conditionDefenses.push(...this.getFeatureConditionDefenses(s, choices));
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        conditionDefenses = [
          ...conditionDefenses,
          ...this.getChoiceConditionDefenses(choice, choices),
        ];
      }
    } else {
      conditionDefenses = [
        ...conditionDefenses,
        ...this.getChoiceConditionDefenses(feature.choices, choices),
      ];
    }

    if (feature.listed) {
      conditionDefenses = [
        ...conditionDefenses,
        ...this.getListedConditionDefenses(feature.listed, choices),
      ];
    }

    return conditionDefenses;
  }
  private getChoiceConditionDefenses(choice: any, choices: any[]) {
    let conditionDefenses = [];

    const choiceEntry = choices.find((c: any) => c.id === choice?.id);
    if (choice?.type === 'trait') {
      const traits =
        choice.options?.find((o: any) => o.name === choiceEntry?.value)
          ?.traits ?? [];
      for (let trait of traits) {
        conditionDefenses = [
          ...conditionDefenses,
          ...this.getFeatureConditionDefenses(trait, choices),
        ];
      }
    } else if (choice?.type === 'feat') {
      const feat = this.dataService.getFeat(choiceEntry?.value);
      if (feat) {
        conditionDefenses = [
          ...conditionDefenses,
          ...this.getFeatureConditionDefenses(feat, choices),
        ];
      }
    } else if (this.dataService.getGenericListKeys().includes(choice?.type)) {
      const data = this.dataService.getGenericListItem(
        choice?.type,
        choiceEntry?.value
      );
      if (data) {
        conditionDefenses = [
          ...conditionDefenses,
          ...this.getFeatureConditionDefenses(data, choices),
        ];
      }
    } else if (
      choice?.type === 'text' &&
      choice?.grants === 'condition-advantage'
    ) {
      conditionDefenses.push({
        type: choiceEntry.value.toLowerCase(),
        level: 1,
      });
    } else if (
      choice?.type === 'text' &&
      choice?.grants === 'condition-immunity'
    ) {
      conditionDefenses.push({
        type: choiceEntry.value.toLowerCase(),
        level: 2,
      });
    }

    return conditionDefenses;
  }
  private getListedConditionDefenses(listed: any, choices: any[]): any[] {
    let conditionDefenses = [];

    const choiceEntry = choices.find((c: any) => c.id === listed?.id);
    if (this.dataService.getGenericListKeys().includes(listed?.type)) {
      for (let item of choiceEntry?.list ?? []) {
        const data = this.dataService.getGenericListItem(listed.type, item);
        if (data) {
          conditionDefenses = [
            ...conditionDefenses,
            ...this.getFeatureDamageDefenses(data, choices),
          ];
        }
      }
    } else if (this.dataService.getGenericKeys().includes(listed?.type)) {
      conditionDefenses.push(...(choiceEntry?.list ?? []));
    }

    return conditionDefenses;
  }

  public getHpBonus(): number {
    let hpBonus = 0;
    const character = JSON.parse(localStorage.getItem('character'));

    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        hpBonus += this.getFeatureHpBonus(trait, character.race.choices);
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        hpBonus += this.getFeatureHpBonus(trait, character.race.choices);
      }
    }

    character.classes?.forEach((c, index) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level: number = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            hpBonus += this.getFeatureHpBonus(feature, c.choices);
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            hpBonus += this.getFeatureHpBonus(feature, c.choices);
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          hpBonus += this.getFeatureHpBonus(
            featData,
            character.background.choices
          );
        }
      }
    });

    return hpBonus;
  }
  public getFeatureHpBonus(feature: any, choices: any[]): number {
    let hpBonus = 0;

    feature.granted?.forEach((g) => {
      if (g.type === 'hit-point-level') {
        hpBonus += g.amount;
      }
    });
    feature.subFeatures?.forEach((s) => {
      hpBonus += this.getFeatureHpBonus(s, choices);
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        hpBonus += this.getChoiceHpBonus(choice, choices);
      }
    } else {
      hpBonus += this.getChoiceHpBonus(feature.choices, choices);
    }

    if (feature.listed) {
      hpBonus += this.getListedHpBonus(feature.listed, choices);
    }

    return hpBonus;
  }
  private getChoiceHpBonus(choice: any, choices: any[]): number {
    let hpBonus = 0;

    const choiceEntry = choices.find((c: any) => c.id === choice?.id);
    if (choice?.type === 'trait') {
      const traits =
        choice.options?.find((o: any) => o.name === choiceEntry?.value)
          ?.traits ?? [];
      for (let trait of traits) {
        hpBonus += this.getFeatureHpBonus(trait, choices);
      }
    } else if (choice?.type === 'feat') {
      const feat = this.dataService.getFeat(choiceEntry?.value);
      if (feat) {
        hpBonus += this.getFeatureHpBonus(feat, choices);
      }
    } else if (this.dataService.getGenericListKeys().includes(choice?.type)) {
      const data = this.dataService.getGenericListItem(
        choice?.type,
        choiceEntry?.value
      );
      if (data) {
        hpBonus += this.getFeatureHpBonus(data, choices);
      }
    }

    return hpBonus;
  }
  private getListedHpBonus(listed: any, choices: any[]): number {
    let hpBonus = 0;

    const choiceEntry = choices.find((c: any) => c.id === listed?.id);
    if (this.dataService.getGenericListKeys().includes(listed?.type)) {
      for (let item of choiceEntry?.list ?? []) {
        const data = this.dataService.getGenericListItem(listed.type, item);
        if (data) {
          hpBonus += this.getFeatureHpBonus(data, choices);
        }
      }
    }

    return hpBonus;
  }

  public getInitBonus(): number {
    let initBonus = 0;
    const character = JSON.parse(localStorage.getItem('character'));

    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        initBonus += this.getFeatureInitBonus(trait, character.race.choices);
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        initBonus += this.getFeatureInitBonus(trait, character.race.choices);
      }
    }

    character.classes?.forEach((c, index) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level: number = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            initBonus += this.getFeatureInitBonus(feature, c.choices);
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            initBonus += this.getFeatureInitBonus(feature, c.choices);
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          initBonus += this.getFeatureInitBonus(
            featData,
            character.background.choices
          );
        }
      }
    });

    return initBonus;
  }
  public getFeatureInitBonus(feature: any, choices: any[]): number {
    let initBonus = 0;

    feature.granted?.forEach((g) => {
      if (g.type === 'initiative-bonus') {
        if (g.amount) {
          initBonus += g.amount;
        } else if (g.score) {
          if (g.score.includes('-')) {
            const choiceEntry = choices.find((ch) => ch.id === g.score);
            if (choiceEntry) {
              initBonus += this.getModifier(choiceEntry.value);
            }
          } else {
            initBonus += this.getModifier(g.score);
          }
        }
      }
    });
    feature.subFeatures?.forEach((s) => {
      initBonus += this.getFeatureInitBonus(s, choices);
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        initBonus += this.getChoiceInitBonus(choice, choices);
      }
    } else {
      initBonus += this.getChoiceInitBonus(feature.choices, choices);
    }

    if (feature.listed) {
      initBonus += this.getListedInitBonus(feature.listed, choices);
    }

    return initBonus;
  }
  private getChoiceInitBonus(choice: any, choices: any[]): number {
    let initBonus = 0;

    const choiceEntry = choices.find((c: any) => c.id === choice?.id);
    if (choice?.type === 'trait') {
      const traits =
        choice.options?.find((o: any) => o.name === choiceEntry?.value)
          ?.traits ?? [];
      for (let trait of traits) {
        initBonus += this.getFeatureInitBonus(trait, choices);
      }
    } else if (choice?.type === 'feat') {
      const feat = this.dataService.getFeat(choiceEntry?.value);
      if (feat) {
        initBonus += this.getFeatureInitBonus(feat, choices);
      }
    } else if (this.dataService.getGenericListKeys().includes(choice?.type)) {
      const data = this.dataService.getGenericListItem(
        choice?.type,
        choiceEntry?.value
      );
      if (data) {
        initBonus += this.getFeatureInitBonus(data, choices);
      }
    }

    return initBonus;
  }
  private getListedInitBonus(listed: any, choices: any[]): number {
    let initBonus = 0;

    const choiceEntry = choices.find((c: any) => c.id === listed?.id);
    if (this.dataService.getGenericListKeys().includes(listed?.type)) {
      for (let item of choiceEntry?.list ?? []) {
        const data = this.dataService.getGenericListItem(listed.type, item);
        if (data) {
          initBonus += this.getFeatureInitBonus(data, choices);
        }
      }
    }

    return initBonus;
  }

  public getSaveBonus(): any {
    let saveBonus = {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      death: 0,
    };
    const character = JSON.parse(localStorage.getItem('character'));

    const raceData = this.dataService.getRace(character.race?.name);
    let subraceData;
    if (character.race?.subrace) {
      subraceData = this.dataService.getSubrace(
        character.race.name,
        character.race.subrace
      );
    }

    if (raceData) {
      for (let trait of raceData.traits) {
        saveBonus = this.getFeatureSaveBonus(
          trait,
          character.race.choices,
          saveBonus
        );
      }
    }
    if (subraceData) {
      for (let trait of subraceData.traits) {
        saveBonus = this.getFeatureSaveBonus(
          trait,
          character.race.choices,
          saveBonus
        );
      }
    }

    character.classes?.forEach((c, index) => {
      const classData = this.dataService.getClass(c.name);
      const subclassData = classData.subclasses.find(
        (s: any) => s.name === c.subclass
      );

      if (classData) {
        for (let level: number = 1; level <= c.level; level++) {
          (classData?.features ?? {})[level]?.forEach((feature) => {
            saveBonus = this.getFeatureSaveBonus(feature, c.choices, saveBonus);
          });
          (subclassData?.features ?? {})[level]?.forEach((feature) => {
            saveBonus = this.getFeatureSaveBonus(feature, c.choices, saveBonus);
          });
        }
      }
    });
    character.background?.choices?.forEach((choice) => {
      if (choice.id === 'bg-feat' || choice.id === 'bg-feat-4') {
        const featData = this.dataService.getFeat(choice.value);
        if (featData) {
          saveBonus = this.getFeatureSaveBonus(
            featData,
            character.background.choices,
            saveBonus
          );
        }
      }
    });

    return saveBonus;
  }
  public getFeatureSaveBonus(
    feature: any,
    choices: any[],
    saveBonus: any
  ): any {
    feature.granted?.forEach((g) => {
      if (g.type === 'save-bonus') {
        let amount = 0;
        if (g.amount.includes('-')) {
          const choiceEntry = choices.find((ch) => ch.id === g.amount)?.value;
          amount = this.getModifier(choiceEntry);
        } else {
          amount = this.getModifier(g.amount);
        }

        if (g.options === 'all') {
          for (let k of Object.keys(saveBonus)) {
            saveBonus[k] += amount;
          }
        } else {
          for (let option of g.options) {
            saveBonus[option] += amount;
          }
        }
      }
    });
    feature.subFeatures?.forEach((s) => {
      saveBonus = this.getFeatureSaveBonus(s, choices, saveBonus);
    });

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        saveBonus = this.getChoiceSaveBonus(choice, choices, saveBonus);
      }
    } else {
      saveBonus = this.getChoiceSaveBonus(feature.choices, choices, saveBonus);
    }

    if (feature.listed) {
      saveBonus = this.getListedSaveBonus(feature.listed, choices, saveBonus);
    }

    return saveBonus;
  }
  private getChoiceSaveBonus(choice: any, choices: any[], saveBonus: any): any {
    const choiceEntry = choices.find((c: any) => c.id === choice?.id);
    if (choice?.type === 'trait') {
      const traits =
        choice.options?.find((o: any) => o.name === choiceEntry?.value)
          ?.traits ?? [];
      for (let trait of traits) {
        saveBonus = this.getFeatureSaveBonus(trait, choices, saveBonus);
      }
    } else if (choice?.type === 'feat') {
      const feat = this.dataService.getFeat(choiceEntry?.value);
      if (feat) {
        saveBonus = this.getFeatureSaveBonus(feat, choices, saveBonus);
      }
    } else if (this.dataService.getGenericListKeys().includes(choice?.type)) {
      const data = this.dataService.getGenericListItem(
        choice?.type,
        choiceEntry?.value
      );
      if (data) {
        saveBonus = this.getFeatureSaveBonus(data, choices, saveBonus);
      }
    }

    return saveBonus;
  }
  private getListedSaveBonus(listed: any, choices: any[], saveBonus: any): any {
    const choiceEntry = choices.find((c: any) => c.id === listed?.id);
    if (this.dataService.getGenericListKeys().includes(listed?.type)) {
      for (let item of choiceEntry?.list ?? []) {
        const data = this.dataService.getGenericListItem(listed.type, item);
        if (data) {
          saveBonus = this.getFeatureSaveBonus(data, choices, saveBonus);
        }
      }
    }

    return saveBonus;
  }

  public getMaxUsesById(
    dataObj: any,
    characterObj: any,
    useId: string,
    level: number
  ): number {
    let maxUses = 0;
    if (!dataObj) {
      const choiceEntry = characterObj.choices.find(
        (ch) => ch.id === 'bg-feat'
      )?.value;
      const featData = this.dataService.getFeat(choiceEntry);

      const choiceEntry4 = characterObj.choices.find(
        (ch) => ch.id === 'bg-feat-4'
      )?.value;
      const featData4 = this.dataService.getFeat(choiceEntry4);

      return (
        this.getFeatureUses(
          featData,
          characterObj.choices,
          useId,
          level,
          maxUses
        ) ||
        this.getFeatureUses(
          featData4,
          characterObj.choices,
          useId,
          level,
          maxUses
        )
      );
    }

    if (dataObj.traits) {
      for (let trait of dataObj.traits) {
        maxUses = this.getFeatureUses(
          trait,
          characterObj.choices,
          useId,
          level,
          maxUses
        );
      }
    } else if (dataObj.features) {
      for (let i = 1; i <= level; i++) {
        if (dataObj.features[i]) {
          for (let feature of dataObj.features[i]) {
            maxUses = this.getFeatureUses(
              feature,
              characterObj.choices,
              useId,
              level,
              maxUses
            );
          }
        }
      }
    }

    if (dataObj.subraces) {
      let subrace = dataObj.subraces.find(
        (s) => s.name === characterObj.subrace
      );
      if (subrace) {
        for (let trait of subrace.traits) {
          maxUses = this.getFeatureUses(
            trait,
            characterObj.choices,
            useId,
            level,
            maxUses
          );
        }
      }
    }
    if (dataObj.subclasses) {
      let subclass = dataObj.subclasses.find(
        (s) => s.name === characterObj.subclass
      );
      if (subclass) {
        for (let i = 1; i <= level; i++) {
          if (subclass.features[i]) {
            for (let feature of subclass.features[i]) {
              maxUses = this.getFeatureUses(
                feature,
                characterObj.choices,
                useId,
                level,
                maxUses
              );
            }
          }
        }
      }
    }

    return maxUses;
  }
  private getFeatureUses(
    feature: any,
    choices: any[],
    useId: string,
    level: number,
    maxUses: number
  ): number {
    if (maxUses !== -1) {
      if (feature.uses) {
        let use;
        if (Array.isArray(feature.uses)) {
          use = feature.uses.find((u) => u.id === useId);
        } else if (feature.uses.id === useId) {
          use = feature.uses;
        }

        if (use) {
          switch (use.type) {
            case 'fixed':
              maxUses += use.amount;
              break;
            case 'level':
              maxUses += use.amount[level - 1];
            case 'derived':
              let amount = 0;
              switch (use.source) {
                case 'level':
                  amount = level;
                  break;
                case 'proficiency':
                  amount = this.getProficiencyBonus();
                  break;
                case 'score':
                  let score;
                  if (use.score.includes('-')) {
                    score = choices.find((ch) => ch.id === use.score)?.value;
                  } else {
                    score = use.score;
                  }

                  if (score) {
                    amount = this.getModifier(score);
                  }
                  break;
              }

              switch (use.modifier) {
                case '*2':
                  amount *= 2;
                  break;
                case '+1':
                  amount += 1;
                  break;
                case '*10':
                  amount *= 10;
                  break;
                case '*5':
                  amount *= 5;
                  break;
                case '/2':
                  amount = Math.floor(amount / 2);
                  break;
              }

              maxUses += amount;
              break;
          }
        }
      }

      if (feature.subFeatures) {
        for (let s of feature.subFeatures) {
          maxUses = this.getFeatureUses(s, choices, useId, level, maxUses);
        }
      }

      if (Array.isArray(feature.choices)) {
        for (let choice of feature.choices) {
          maxUses = this.getChoiceUses(choice, choices, useId, level, maxUses);
        }
      } else {
        maxUses = this.getChoiceUses(
          feature.choices,
          choices,
          useId,
          level,
          maxUses
        );
      }

      if (feature.listed) {
        maxUses = this.getListedUses(
          feature.listed,
          choices,
          useId,
          level,
          maxUses
        );
      }
    }
    return maxUses;
  }
  private getChoiceUses(
    choice: any,
    choices: any[],
    useId: string,
    level: number,
    maxUses: number
  ): number {
    const choiceEntry = choices.find((c: any) => c.id === choice?.id);
    if (choice?.type === 'trait') {
      const traits =
        choice.options?.find((o: any) => o.name === choiceEntry?.value)
          ?.traits ?? [];
      for (let trait of traits) {
        maxUses = this.getFeatureUses(trait, choices, useId, level, maxUses);
      }
    } else if (choice?.type === 'feat') {
      const feat = this.dataService.getFeat(choiceEntry?.value);
      if (feat) {
        maxUses = this.getFeatureUses(feat, choices, useId, level, maxUses);
      }
    } else if (this.dataService.getGenericListKeys().includes(choice?.type)) {
      const data = this.dataService.getGenericListItem(
        choice?.type,
        choiceEntry?.value
      );
      if (data) {
        maxUses = this.getFeatureUses(data, choices, useId, level, maxUses);
      }
    }

    return maxUses;
  }
  private getListedUses(
    listed: any,
    choices: any[],
    useId: string,
    level: number,
    maxUses: number
  ): number {
    const choiceEntry = choices.find((c: any) => c.id === listed?.id);
    if (this.dataService.getGenericListKeys().includes(listed?.type)) {
      for (let item of choiceEntry?.list ?? []) {
        const data = this.dataService.getGenericListItem(listed.type, item);
        if (data) {
          maxUses = this.getFeatureUses(data, choices, useId, level, maxUses);
        }
      }
    }

    return maxUses;
  }

  public getUseResetById(
    dataObj: any,
    characterObj: any,
    useId: string,
    level: number
  ): number {
    let reset = 0;
    if (!dataObj) {
      const choiceEntry = characterObj.choices.find(
        (ch) => ch.id === 'bg-feat'
      )?.value;
      const featData = this.dataService.getFeat(choiceEntry);

      const choiceEntry4 = characterObj.choices.find(
        (ch) => ch.id === 'bg-feat-4'
      )?.value;
      const featData4 = this.dataService.getFeat(choiceEntry4);

      return (
        this.getFeatureUseReset(
          featData,
          characterObj.choices,
          useId,
          level,
          reset
        ) ||
        this.getFeatureUseReset(
          featData4,
          characterObj.choices,
          useId,
          level,
          reset
        )
      );
    }

    if (dataObj.traits) {
      for (let trait of dataObj.traits) {
        reset = this.getFeatureUseReset(
          trait,
          characterObj.choices,
          useId,
          level,
          reset
        );
      }
    } else if (dataObj.features) {
      for (let i = 1; i <= level; i++) {
        if (dataObj.features[i]) {
          for (let feature of dataObj.features[i]) {
            reset = this.getFeatureUseReset(
              feature,
              characterObj.choices,
              useId,
              level,
              reset
            );
          }
        }
      }
    }

    if (dataObj.subraces) {
      let subrace = dataObj.subraces.find(
        (s) => s.name === characterObj.subrace
      );
      if (subrace) {
        for (let trait of subrace.traits) {
          reset = this.getFeatureUseReset(
            trait,
            characterObj.choices,
            useId,
            level,
            reset
          );
        }
      }
    }
    if (dataObj.subclasses) {
      let subclass = dataObj.subclasses.find(
        (s) => s.name === characterObj.subclass
      );
      if (subclass) {
        for (let i = 1; i <= level; i++) {
          if (subclass.features[i]) {
            for (let feature of subclass.features[i]) {
              reset = this.getFeatureUseReset(
                feature,
                characterObj.choices,
                useId,
                level,
                reset
              );
            }
          }
        }
      }
    }

    return reset;
  }
  private getFeatureUseReset(
    feature: any,
    choices: any[],
    useId: string,
    level: number,
    reset: number
  ): number {
    if (feature.uses) {
      let use;
      if (Array.isArray(feature.uses)) {
        use = feature.uses.find((u) => u.id === useId);
      } else if (feature.uses.id === useId) {
        use = feature.uses;
      }

      if (use) {
        if (use.reset < reset || !reset) {
          reset = use.reset;
        }
      }
    }

    if (feature.subFeatures) {
      for (let s of feature.subFeatures) {
        reset = this.getFeatureUseReset(s, choices, useId, level, reset);
      }
    }

    if (Array.isArray(feature.choices)) {
      for (let choice of feature.choices) {
        reset = this.getChoiceUseReset(choice, choices, useId, level, reset);
      }
    } else {
      reset = this.getChoiceUseReset(
        feature.choices,
        choices,
        useId,
        level,
        reset
      );
    }

    if (feature.listed) {
      reset = this.getListedUseReset(
        feature.listed,
        choices,
        useId,
        level,
        reset
      );
    }
    return reset;
  }
  private getChoiceUseReset(
    choice: any,
    choices: any[],
    useId: string,
    level: number,
    reset: number
  ): number {
    const choiceEntry = choices.find((c: any) => c.id === choice?.id);
    if (choice?.type === 'trait') {
      const traits =
        choice.options?.find((o: any) => o.name === choiceEntry?.value)
          ?.traits ?? [];
      for (let trait of traits) {
        reset = this.getFeatureUseReset(trait, choices, useId, level, reset);
      }
    } else if (choice?.type === 'feat') {
      const feat = this.dataService.getFeat(choiceEntry?.value);
      if (feat) {
        reset = this.getFeatureUseReset(feat, choices, useId, level, reset);
      }
    } else if (this.dataService.getGenericListKeys().includes(choice?.type)) {
      const data = this.dataService.getGenericListItem(
        choice?.type,
        choiceEntry?.value
      );
      if (data) {
        reset = this.getFeatureUseReset(data, choices, useId, level, reset);
      }
    }

    return reset;
  }
  private getListedUseReset(
    listed: any,
    choices: any[],
    useId: string,
    level: number,
    reset: number
  ): number {
    const choiceEntry = choices.find((c: any) => c.id === listed?.id);
    if (this.dataService.getGenericListKeys().includes(listed?.type)) {
      for (let item of choiceEntry?.list ?? []) {
        const data = this.dataService.getGenericListItem(listed.type, item);
        if (data) {
          reset = this.getFeatureUseReset(data, choices, useId, level, reset);
        }
      }
    }

    return reset;
  }

  public dieSizeUp() {
    const character = this.getCharacterFromCache();
    if (character.classes) {
      for (let c of character.classes) {
        if (c.subclass === 'Master At Arms') {
          return true;
        } else {
          for (let ch of c.choices) {
            if (
              ch.id === '06D21A61-5648-43A7-8ACA-F32A583386DD' &&
              ch.value === 'Master At Arms'
            ) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}
