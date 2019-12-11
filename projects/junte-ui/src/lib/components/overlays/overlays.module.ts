import { NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { PopoverModule } from './popover/popover.module';

@NgModule({
  exports: [
    ModalModule,
    PopoverModule
  ]
})
export class OverlaysModule {
}
