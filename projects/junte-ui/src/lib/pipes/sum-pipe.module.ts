import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumPipe } from './sum-pipe';

@NgModule({
  imports: [CommonModule],
  exports: [SumPipe],
  declarations: [SumPipe]
})
export class SumPipeModule {
}
