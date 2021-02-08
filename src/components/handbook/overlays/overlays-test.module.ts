import { NgModule } from '@angular/core';
import { OverlaysRoutingModule } from './overlays-routing.module';
import { PopoverTestModule } from './popover/popover-test.module';
import { ModalTestModule } from './modal/modal-test.module';
import { ModalTestFactoryComponent } from './modal/test.component';

@NgModule({
  imports: [
    OverlaysRoutingModule,
    ModalTestModule,
    PopoverTestModule
  ],
  entryComponents: [
    ModalTestFactoryComponent
  ]
})
export class OverlaysTestModule {
}
