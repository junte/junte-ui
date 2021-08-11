import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { MathPipesModule } from '../../core/pipes/math-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { GridModule } from '../../layout/grid/grid.module';
import { StackModule } from '../../layout/stack/stack.module';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RadioComponent } from './radio.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StackModule,
    IconModule,
    GridModule,
    MathPipesModule,
    ArrayPipesModule
  ],
  exports: [
    RadioComponent,
    RadioGroupComponent
  ],
  declarations: [
    RadioComponent,
    RadioGroupComponent
  ],
  entryComponents: [
    RadioComponent,
    RadioGroupComponent
  ]
})
export class RadioModule {
}
