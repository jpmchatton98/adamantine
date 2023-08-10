import { NgModule } from '@angular/core';
import {
  Route,
  RouterModule,
  Routes,
  UrlMatchResult,
  UrlSegment,
  UrlSegmentGroup,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { BestiaryComponent } from 'src/components/bestiary/bestiary/bestiary.component';
import { CharacterBuilderComponent } from 'src/components/characters/builder/character-builder/character-builder.component';
import { CharactersComponent } from 'src/components/characters/characters/characters.component';
import { CharacterSheetComponent } from 'src/components/characters/sheet/character-sheet/character-sheet.component';
import { DatabaseComponent } from 'src/components/database/database.component';
import { DmToolsComponent } from 'src/components/dm-tools/dm-tools.component';
import { GeneralStoreComponent } from 'src/components/general-store/general-store.component';
import { MagicItemComponent } from 'src/components/general-store/magic-items/magic-item/magic-item.component';
import { MagicItemsComponent } from 'src/components/general-store/magic-items/magic-items/magic-items.component';
import { StorePageComponent } from 'src/components/general-store/pages/store-page/store-page.component';
import { ClassDataComponent } from 'src/components/pages/classes/class-data/class-data.component';
import { ClassExtraTabComponent } from 'src/components/pages/classes/class-extra-tab/class-extra-tab.component';
import { ClassSubclassesComponent } from 'src/components/pages/classes/class-subclasses/class-subclasses.component';
import { ClassComponent } from 'src/components/pages/classes/class/class.component';
import { SubclassDataComponent } from 'src/components/pages/classes/subclass-data/subclass-data.component';
import { SubclassComponent } from 'src/components/pages/classes/subclass/subclass.component';
import { ExploitComponent } from 'src/components/pages/exploits/exploit/exploit.component';
import { ExploitsComponent } from 'src/components/pages/exploits/exploits/exploits.component';
import { FeatComponent } from 'src/components/pages/feat/feat.component';
import { MonsterComponent } from 'src/components/pages/monster/monster/monster.component';
import { RaceDataComponent } from 'src/components/pages/races/race-data/race-data.component';
import { RaceComponent } from 'src/components/pages/races/race/race.component';
import { SubraceComponent } from 'src/components/pages/races/subrace/subrace.component';
import { SubracesComponent } from 'src/components/pages/races/subraces/subraces.component';
import { SpellComponent } from 'src/components/pages/spells/spell/spell.component';
import { SpellsComponent } from 'src/components/pages/spells/spells/spells.component';
import { TransformationComponent } from 'src/components/pages/transformations/transformation/transformation.component';

export function customMatcher(
  segments: UrlSegment[],
  group: UrlSegmentGroup,
  route: Route
): UrlMatchResult | null {
  const parts = route.path?.split('/') ?? [];
  const params = {};

  if (parts.length !== segments.length) {
    return null;
  }

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].startsWith(':')) {
      params[parts[i].substring(1)] = segments[i];
    } else if (parts[i] !== segments[i].path) {
      return null;
    }
  }

  return { consumed: segments };
}

const routes: Routes = [
  {
    path: 'database/:tab',
    component: DatabaseComponent,
  },
  {
    path: 'spells/:list',
    component: SpellsComponent,
  },
  {
    path: 'spell/:name',
    component: SpellComponent,
  },
  {
    path: 'exploits/:list',
    component: ExploitsComponent,
  },
  {
    path: 'exploit/:name',
    component: ExploitComponent,
  },
  {
    path: 'race/:name',
    component: RaceComponent,
    children: [
      {
        path: '',
        redirectTo: 'race',
        pathMatch: 'full',
      },
      {
        path: 'race',
        component: RaceDataComponent,
      },
      {
        path: 'subraces',
        component: SubracesComponent,
        children: [
          {
            path: ':name',
            component: SubraceComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'class/:name',
    component: ClassComponent,
    children: [
      {
        path: '',
        redirectTo: 'class',
        pathMatch: 'full',
      },
      {
        path: 'class',
        component: ClassDataComponent,
      },
      {
        path: 'subclasses',
        component: ClassSubclassesComponent,
        children: [
          {
            path: ':name',
            component: SubclassComponent,
            children: [
              {
                path: '',
                redirectTo: 'subclass',
                pathMatch: 'full',
              },
              {
                path: 'subclass',
                component: SubclassDataComponent,
              },
              {
                path: ':tab',
                component: ClassExtraTabComponent,
              },
            ],
          },
        ],
      },
      {
        path: ':tab',
        component: ClassExtraTabComponent,
      },
    ],
  },
  {
    path: 'feat/:name',
    component: FeatComponent,
  },
  {
    path: 'transformation/:name',
    component: TransformationComponent,
  },
  {
    path: 'bestiary',
    component: BestiaryComponent,
  },
  {
    path: 'bestiary/:name',
    component: MonsterComponent,
  },
  {
    path: '',
    redirectTo: 'database/spells',
    pathMatch: 'full',
  },

  {
    path: 'dm-tools',
    component: DmToolsComponent,
  },

  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characters/:guid/builder',
    component: CharacterBuilderComponent,
  },
  {
    path: 'characters/:guid/sheet',
    component: CharacterSheetComponent,
  },

  {
    path: 'general-store',
    component: GeneralStoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic-equipment',
        pathMatch: 'full',
      },
      {
        path: ':tab',
        component: StorePageComponent,
        children: [
          {
            path: ':subtab',
            component: GeneralStoreComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'magic-items',
    component: MagicItemsComponent,
    children: [
      {
        path: '',
        redirectTo: 'common',
        pathMatch: 'full',
      },
      {
        path: ':rarity',
        component: MagicItemsComponent,
      },
    ],
  },
  {
    path: 'magic-item/:item',
    component: MagicItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [provideRouter(routes, withComponentInputBinding())],
  exports: [RouterModule],
})
export class AppRoutingModule {}
