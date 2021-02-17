import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule, GridModule, IconModule, LabelModule, StackModule } from 'junte-ui';
import { SectionModule } from '../shared/section/section.module';
import { ModalTestModule } from './modal/modal-test.module';
import { ModalTestFactoryComponent } from './modal/test.component';
import { OverlaysRoutingModule } from './overlays-routing.module';
import { OverlaysTestComponent } from './overlays-test.component';
import { PopoverTestModule } from './popover/popover-test.module';

@NgModule({
  declarations: [
    OverlaysTestComponent
  ],
  imports: [
    StackModule,
    CardModule,
    GridModule,
    IconModule,
    LabelModule,
    CommonModule,
    SectionModule,
    OverlaysRoutingModule,
    ModalTestModule,
    PopoverTestModule
  ],
  entryComponents: [
    ModalTestFactoryComponent
  ],
  exports: [
    OverlaysTestComponent
  ]
})
export class OverlaysTestModule {
}
