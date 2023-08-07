export interface IDataModel {
  show?: boolean;
}

export interface IFeature {
  name: string;
  description: string;

  subFeatures?: IFeature[];

  choices?: IChoice | IChoice[];
  listed?: IListed;
  granted?: IGranted | IGranted[];
  uses?: IUses | IUses[];
}
export interface IChoice {
  id: string;
  type: string;

  grants?: string;
  level?: number;
  limits?: string;
  options?: string[] | IChoiceOption[];

  school?: string[];
  list?: string;
  degree?: string;

  ability?: string;

  [property: string]: any;
}
export interface IChoiceOption {
  name: string;
  traits: IFeature[];
}
export interface IGranted {
  type: string;
  options: string[];

  ability?: string;
  atWill?: boolean;

  ignoreMaxLevel?: boolean;
  ritualsOnly?: string;

  atWillDie?: number[];

  [property: string]: any;
}
export interface IUses {
  id: string;
  type: 'fixed' | 'level' | 'derived';
  reset?: 'short' | 'long';

  amount?: number | number[];

  source?: string;
  score?: string;
  modifier?: string;
}
export interface IListed {
  id: string;
  type: string;

  maximums?: number[];
  addToMaximum?: string;

  ability?: string;

  list?: string;

  spellcasterType?: number;
  maxLevel?: number;
  allowCantrips?: boolean;
  ritualsOnly?: boolean;

  exploitType?: number;
}

export interface IRace extends IDataModel {
  name: string;
  description?: string;

  asis: (IRaceAsi | IRaceAsiChoice)[];
  maturity?: number;
  lifespan: number;
  height: number[];
  weight: number[];
  category: string;
  type: string;
  size: number;
  speed: number;
  darkvision: number;
  languages: (string | IRaceLanguage)[];

  traits?: IFeature[];

  subraces: ISubrace[];
}
export interface IRaceAsi {
  [score: string]: number;
}
export interface IRaceAsiChoice {
  id: string;
  type: string;
  options: string[];
  amount: number;
}
export interface IRaceLanguage {
  id: string;
  type: string;
}
export interface ISubrace extends IDataModel {
  name: string;
  description?: string;
  asis?: (IRaceAsi | IRaceAsiChoice)[];
  traits: IFeature[];
}

export interface IClass extends IDataModel {
  name: string;
  hitDie: number;
  proficiencies: IClassProficiencies;
  equipment: any[];

  features: IClassLevels;

  fakeFeatures?: IClassFakeLevels;
  extraCols?: IClassTableColumn[];

  subclassName: string;
  subclassSpellName?: string;
  subclassLevel: number;
  subclasses: ISubclass[];

  extraTabs: IClassTab[];

  spellcaster?: boolean;
  spellcastingType?: string;
  spellcastingLevel?: number;

  exploits?: boolean;
  exploitLevel?: number;
}
export interface IClassProficiencies {
  armor: string[];
  weapons: string[];
  tools: string[];
  savingThrows: string[];

  numSkills: number;
  skillChoices: string[];

  multiclassSkills: number;
  multiclassArmor: string[];
  multiclassWeapons: string[];
  multiclassTools: string[];
}
export interface IClassLevels {
  [level: string]: IFeature[];
}
export interface IClassFakeLevels {
  [level: string]: string[];
}
export interface IClassTableColumn {
  name: string;
  type: string;

  level?: number;
  feature?: string;
  subFeature?: string;

  values?: string[];
}
export interface IClassTab {
  name: string;
  type: string;

  list?: string;

  spellcaster?: number;
}
export interface ISubclass extends IDataModel {
  name: string;
  description: string;
  features: IClassLevels;

  extraTabs: IClassTab[];

  spellcaster?: boolean;
  spellcastingType?: string;
  spellcastingLevel?: number;

  exploits?: boolean;
  exploitLevel?: number;
}
