import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { SanitizePipeModule } from '../../pipes/sanitize.module';
import { BlockModule } from '../block';
import { ButtonModule } from '../button';
import { StackModule } from '../stack';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    BlockModule,
    ButtonModule,
    StackModule,
    SanitizePipeModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule {
}
