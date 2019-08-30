import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SanitizePipeModule } from '../../pipes/sanitize.module';
import { BlockModule } from '../block/block.module';
import { ButtonModule } from '../button/button.module';
import { StackModule } from '../stack/stack.module';
import { ModalComponent } from './modal.component';
import { IconModule } from '../icon/icon.module';

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
  exports: [
    ModalComponent
  ]
})
export class ModalModule {
}
