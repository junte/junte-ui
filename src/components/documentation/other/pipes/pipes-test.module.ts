import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule } from 'junte-ui';
import { EmptyPipe } from 'projects/junte-ui/src/lib/pipes/empty-pipe';
import { PipesTestComponent } from './pipes-test.component';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
  ],
  exports: [
    PipesTestComponent
  ],
  declarations: [
    PipesTestComponent,
    EmptyPipe
  ],
})
export class PipesTestModule {
}
