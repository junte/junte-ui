import { NgModule } from '@angular/core';
import { JunteUiComponent } from './junte-ui.component';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './components/grid/container/container.component';
import { RowComponent } from './components/grid/row/row.component';
import { ColComponent } from './components/grid/col/col.component';
import { IconComponent } from './components/icon/icon.component';
import { StackDirective } from './directives/stack';
import { StackComponent } from './components/stack/stack.component';
import { BlockComponent } from './components/block/block.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SwitchComponent } from './components/switch/switch.component';
import { PagerComponent } from './components/pager/pager.component';
import {FormComponent} from './components/form/form.component';
import {StringTemplateOutletDirective} from './directives/string-template-outlet';
import { FormItemComponent } from './components/form/form-item/form-item.component';
import { FormLabelComponent } from './components/form/form-label/form-label.component';
import { FormMessageComponent } from './components/form/form-message/form-message.component';

@NgModule({
  declarations: [
    StringTemplateOutletDirective,
    JunteUiComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    CardComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    IconComponent,
    StackDirective,
    StackComponent,
    BlockComponent,
    SpinnerComponent,
    SwitchComponent,
    SpinnerComponent,
    PagerComponent,
    FormComponent,
    FormItemComponent,
    FormLabelComponent,
    FormMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    JunteUiComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    CardComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    IconComponent,
    StackDirective,
    StackComponent,
    BlockComponent,
    PagerComponent,
    SpinnerComponent,
    SwitchComponent,
    FormComponent,
    FormItemComponent,
    FormLabelComponent,
    FormMessageComponent
  ]
})
export class JunteUiModule {
}
