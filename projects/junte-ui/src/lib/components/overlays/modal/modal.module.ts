import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SanitizePipeModule } from '../../../pipes/sanitize.module';
import { ButtonModule } from '../../forms/button/button.module';
import { BlockModule } from '../../layout/block/block.module';
import { StackModule } from '../../layout/stack/stack.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    BlockModule,
    ButtonModule,
    StackModule,
    IconModule,
    SanitizePipeModule
  ],
  entryComponents: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule {
}
