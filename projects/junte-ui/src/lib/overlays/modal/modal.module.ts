import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { BlockModule } from '../../layout/block/block.module';
import { ResponsiveModule } from '../../layout/responsive/responsive.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ModalComponent } from './modal.component';
import { ModalDirective } from './modal.directive';

@NgModule({
  declarations: [
    ModalComponent,
    ModalDirective
  ],
  imports: [
    CommonModule,
    BlockModule,
    ButtonModule,
    StackModule,
    IconModule,
    ResponsiveModule
  ],
  entryComponents: [
    ModalComponent
  ],
  exports: [
    ModalComponent,
    ModalDirective
  ]
})
export class ModalModule {
}
