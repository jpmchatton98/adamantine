import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterBuilderModule } from './builder/character-builder.module';
import { CharacterSheetModule } from './sheet/character-sheet.module';
import { CharactersComponent } from './characters/characters.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    CharacterBuilderModule,
    CharacterSheetModule,
    NzButtonModule,
  ],
})
export class CharacterModule {}
