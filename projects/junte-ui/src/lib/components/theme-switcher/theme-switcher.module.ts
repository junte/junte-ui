import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../icon/icon.module';
import { StackModule } from '../stack/stack.module';
import { ThemeSwitcherComponent } from './theme-switcher.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
