import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, ProgressBarModule, TextPipeModule } from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { PipesTestComponent } from './pipes-test.component';

@NgModule({
  imports: [
    CommonModule,
    GridModule.forRoot(JUNTE_UI_CONFIG),
    TextPipeModule
  ],
  exports: [
    PipesTestComponent
  ],
  declarations: [
    PipesTestComponent
  ],
})
export class PipesTestModule {
}
