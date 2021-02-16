import { NgModule } from '@angular/core';
import { EmptyModule } from './empty/empty.module';
import { ConfirmModule } from './confirm/confirm.module';
import { MessageModule } from './message/message.module';
import { ThemeSwitcherModule } from './theme-switcher/theme-switcher.module';

@NgModule({
  exports: [
    ConfirmModule,
    ThemeSwitcherModule,
    MessageModule,
    EmptyModule
  ]
})
export class SharedModule {
}
