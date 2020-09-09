import { NgModule } from '@angular/core';
import { ConfirmModule } from './confirm/confirm.module';
import { MessageModule } from './message/message.module';
import { ThemeSwitcherModule } from './theme-switcher/theme-switcher.module';

@NgModule({
  exports: [
    ConfirmModule,
    ThemeSwitcherModule,
    MessageModule
  ]
})
export class SharedModule {
}
