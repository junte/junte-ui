import { NgModule } from '@angular/core';
import { EmptyModule } from './empty/empty.module';
import { ConfirmModule } from './confirm/confirm.module';
import { MessageModule } from './message/message.module';

@NgModule({
  exports: [
    ConfirmModule,
    MessageModule,
    EmptyModule
  ]
})
export class OtherModule {
}
