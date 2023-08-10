import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages/pages.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DmToolsComponent } from './dm-tools.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [DmToolsComponent],
  imports: [
    CommonModule,
    FormsModule,
    PagesModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzTabsModule,
    RouterModule,
  ],
})
export class DmToolsModule {}
