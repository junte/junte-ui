import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JunteUiModule } from 'projects/junte-ui/src/lib/junte-ui.module';

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
