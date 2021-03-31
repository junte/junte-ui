import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ResponsiveModule } from '../../layout/responsive/responsive.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ButtonModule } from '../button/button.module';
import { GetOptionPipe, GetOptionsPipe, TrackGroupPipe } from './pipes';
import { SelectComponent, SelectOptionComponent } from './select.component';

@NgModule({
  declarations: [
    SelectComponent,
    SelectOptionComponent,
    GetOptionsPipe,
    GetOptionPipe,
    TrackGroupPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    SpinnerModule,
    SkeletonModule,
    ButtonModule,
    ArrayPipesModule,
    StackModule,
    ResponsiveModule
  ],
  entryComponents:
    [
      SelectComponent,
      SelectOptionComponent
    ],
  exports: [
    SelectComponent,
    SelectOptionComponent
  ]
})
export class SelectModule {
}
