import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages/pages.module';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [BestiaryComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
    NzTableModule,
    NzCheckboxModule,
    NzSelectModule,
    NzSliderModule,
    NzInputModule,
    NzCollapseModule,
  ],
})
export class BestiaryModule {}
