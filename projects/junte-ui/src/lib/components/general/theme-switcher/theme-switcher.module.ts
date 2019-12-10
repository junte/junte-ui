import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StackModule } from '../../layout/stack/stack.module';
import { IconModule } from '../../ui-elements/icon/icon.module';
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
