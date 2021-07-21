import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { MathPipesModule } from '../../core/pipes/math-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { GridModule } from '../../layout/grid/grid.module';
import { StackModule } from '../../layout/stack/stack.module';
import { SwitchGroupComponent } from './switch-group/switch-group.component';
import { SwitchComponent } from './switch.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ReactiveFormsModule,
    StackModule,
    GridModule,
    ArrayPipesModule,
    MathPipesModule
  ],
  exports: [
    SwitchComponent,
    SwitchGroupComponent
  ],
  entryComponents: [
    SwitchComponent,
    SwitchGroupComponent
  ],
  declarations: [
    SwitchComponent,
    SwitchGroupComponent
  ]
})
export class SwitchModule {
}
