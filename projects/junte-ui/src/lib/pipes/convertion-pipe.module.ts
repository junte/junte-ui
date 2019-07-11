import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentToNumberPipe } from './convertion.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [PercentToNumberPipe],
  declarations: [PercentToNumberPipe]
})

export class ConvertionPipeModule {
}
