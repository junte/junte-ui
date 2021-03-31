import { NgModule } from '@angular/core';
import { ThemeSwitcherModule } from './theme-switcher/theme-switcher.module';

@NgModule({
  exports: [
    ThemeSwitcherModule
  ]
})
export class SharedModule {
}
