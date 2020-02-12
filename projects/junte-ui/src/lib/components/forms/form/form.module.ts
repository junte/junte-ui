import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JunteDirectiveModule } from '../../../directives/junte-directive.module';
import { ValidationDirective } from './directives';
import { FieldTouchedHasErrorPipe } from './pipes';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { IconModule } from '../../elements/icon/icon.module';
import { LabelModule } from '../../elements/label/label.module';
import { StackModule } from '../../layout/stack/stack.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { InputModule } from '../input/input.module';
import { RadioModule } from '../radio/radio.module';
import { SelectModule } from '../select/select.module';
import { SwitchModule } from '../switch/switch.module';
import { FormControlComponent } from './control/form-control.component';
import { FormItemComponent } from './item/form-item.component';
import { FormLabelComponent } from './label/form-label.component';
import { FormMessageComponent } from './message/form-message.component';
import { FormComponent } from './form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JunteDirectiveModule,
    CheckboxModule,
    LabelModule,
    StackModule,
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
    FieldTouchedHasErrorPipe
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
