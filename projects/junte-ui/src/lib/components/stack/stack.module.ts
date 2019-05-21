import { NgModule } from '@angular/core';
import { StackComponent } from './stack.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StackComponent
  ],
  exports: [
    StackComponent
  ]
})
export class StackModule {
}
