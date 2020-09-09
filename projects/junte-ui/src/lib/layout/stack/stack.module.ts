import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StackComponent } from './stack.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StackComponent
  ],
  entryComponents: [
    StackComponent
  ],
  exports: [
    StackComponent
  ]
})
export class StackModule {
}
