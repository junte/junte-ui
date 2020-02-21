import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, TextPipeModule } from 'junte-ui';
import { PipesTestComponent } from './pipes-test.component';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
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
