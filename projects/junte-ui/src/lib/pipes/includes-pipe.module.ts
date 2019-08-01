import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncludesPipe } from './includes.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [IncludesPipe],
  declarations: [IncludesPipe]
})

export class IncludesPipeModule {
}
