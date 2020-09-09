import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, ProgressBarModule, TextPipesModule } from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { PipesTestComponent } from './pipes-test.component';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    TextPipesModule
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
