import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JunteUiModule } from 'junte-ui';

import { ThemingComponent } from './theming.component';

@NgModule({
  imports: [
    CommonModule,
    JunteUiModule
  ],
  exports: [ThemingComponent],
  declarations: [ThemingComponent],
})
export class ThemingModule {
}
