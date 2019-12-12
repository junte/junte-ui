import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JunteDirectiveModule } from '../../../directives/junte-directive.module';
import { ArrayPipeModule } from '../../../pipes/array-pipe.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { IconModule } from '../../elements/icon/icon.module';
import { GetOptionPipe, GetOptionsPipe } from './pipes';
import { SelectComponent, SelectOptionComponent } from './select.component';
import { ButtonModule } from '../button/button.module';
import { StackModule } from '../../layout/stack/stack.module';

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
    ButtonModule,
    ArrayPipeModule,
    StackModule
  ],
  exports: [
    SelectComponent,
    SelectOptionComponent
  ]
})
export class SelectModule {
}
