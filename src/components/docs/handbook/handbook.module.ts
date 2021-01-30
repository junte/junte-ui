import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandbookRoutingModule } from 'src/components/docs/handbook/handbook-routing.module';
import { HandbookComponent } from 'src/components/docs/handbook/handbook.component';
import { JunteUiModule } from 'junte-ui';

@NgModule({
  declarations: [
    HandbookComponent
  ],
  imports: [
    CommonModule,
    JunteUiModule,
    HandbookRoutingModule,
  ]
})
export class HandbookModule { }
