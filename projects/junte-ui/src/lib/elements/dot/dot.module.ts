import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DotComponent } from './dot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DotComponent
  ],
  declarations: [
    DotComponent
  ],
  entryComponents: [
    DotComponent,
  ]
})
export class DotModule {
}
