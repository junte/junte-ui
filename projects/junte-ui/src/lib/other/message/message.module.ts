import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    StackModule,
  ],
  exports: [
    MessageComponent
  ]
})
export class MessageModule {
}
