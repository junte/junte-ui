import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, TextPipesModule } from 'junte-ui';
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
