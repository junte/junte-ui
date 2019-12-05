import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { GetOptionPipe, GetOptionsPipe } from './pipes';
import { ArrayPipeModule } from '../../pipes/array-pipe.module';
import { JunteDirectiveModule } from '../../directives/junte-directive.module';
import { IconModule } from '../icon/icon.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { SelectComponent, SelectOptionComponent } from './select.component';

@NgModule({
  declarations: [
    SelectComponent,
    SelectOptionComponent,
    GetOptionsPipe,
    GetOptionPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    SpinnerModule,
    SkeletonModule,
    JunteDirectiveModule,

    ArrayPipeModule
  ],
  exports: [
    SelectComponent,
    SelectOptionComponent
  ]
})
export class SelectModule {
}
