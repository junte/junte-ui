import { NgModule } from '@angular/core';
import { OverlaysRoutingModule } from './overlays-routing.module';
import { PopoverTestModule } from './popover/popover-test.module';
import { ModalTestModule } from './modal/modal-test.module';

@NgModule({
  imports: [
    OverlaysRoutingModule,
    ModalTestModule,
    PopoverTestModule
  ]
})
export class OverlaysTestModule {
}
