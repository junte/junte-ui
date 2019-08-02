import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { StackModule } from '../stack/stack.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    StackModule,
    IconModule
  ],
  exports: [
    ThemeSwitcherComponent
  ],
  declarations: [
    ThemeSwitcherComponent
  ]
})
export class ThemeSwitcherModule {
}
