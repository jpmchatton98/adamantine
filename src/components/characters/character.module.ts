import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterBuilderModule } from './builder/character-builder.module';
import { CharacterSheetModule } from './sheet/character-sheet.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CharacterBuilderModule, CharacterSheetModule],
})
export class CharacterModule {}
