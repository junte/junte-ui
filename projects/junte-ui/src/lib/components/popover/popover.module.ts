import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JunteDirectiveModule } from '../../directives/junte-directive.module';
import { PopoverComponent } from './popover.component';
import { PopoverDirective } from './popover.directive';

@NgModule({
  declarations: [
    PopoverComponent,
    PopoverDirective
  ],
  imports: [
    CommonModule,
    JunteDirectiveModule
  ],
  entryComponents: [
    PopoverComponent
  ],
  exports: [
    PopoverComponent,
    PopoverDirective
  ]
})
export class PopoverModule {
}
