import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from './app-footer.component';
import { JunteUiModule } from '../../../projects/junte-ui/src/lib/junte-ui.module';

@NgModule({
  imports: [
    CommonModule,
    JunteUiModule
  ],
  declarations: [
    AppFooterComponent
  ],
  exports: [
    AppFooterComponent
  ]
})
export class AppFooterModule {
}
