import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldTouchedHasErrorPipe } from '../../pipes/form.pipe';
import { FormComponent } from './form.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormItemComponent } from './form-item/form-item.component';
import { FormLabelComponent } from './form-label/form-label.component';
import { FormMessageComponent } from './form-message/form-message.component';
import { ValidationDirective } from '../../directives/validation';
import { IconModule } from '../icon/icon.module';
import { JunteDirectiveModule } from '../../directives/junte-directive.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { InputModule } from '../input/input.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { LabelModule } from '../label/label.module';
import { RadioModule } from '../radio/radio.module';
import { SelectModule } from '../select/select.module';
import { SwitchModule } from '../switch/switch.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JunteDirectiveModule,
    CheckboxModule,
    LabelModule,
    ReactiveFormsModule,
    RouterModule,
    RadioModule,
    IconModule,
    InputModule,
    SelectModule,
    SpinnerModule,
    SwitchModule
  ],
  declarations: [
    FormComponent,
    FormControlComponent,
    FormItemComponent,
    FormLabelComponent,
    FormMessageComponent,
    ValidationDirective,
    FieldTouchedHasErrorPipe,
  ],
  exports: [
    FormComponent,
    FormControlComponent,
    FormItemComponent,
    FormLabelComponent,
    FormMessageComponent,
    ValidationDirective,
    FieldTouchedHasErrorPipe
  ]
})
export class FormModule {
}
