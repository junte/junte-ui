import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmComponent } from './confirm.component';
import { ButtonModule } from '../../forms/button/button.module';
import { FormModule } from '../../forms/form/form.module';
import { StackModule } from '../../layout/stack/stack.module';
import { JunteDirectiveModule } from '../../../directives/junte-directive.module';

@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormModule,
    StackModule,
    JunteDirectiveModule
  ],
  exports: [
    ConfirmComponent
  ]
})
export class ConfirmModule {
}
