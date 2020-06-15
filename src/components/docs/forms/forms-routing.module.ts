import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectableTestComponent } from 'src/components/docs/forms/selectable/selectable-test.component';
import { ButtonTestComponent } from './button/button-test.component';
import { CalendarTestComponent } from './calendar/calendar-test.component';
import { CheckboxTestComponent } from './checkbox/checkbox-test.component';
import { CodeTestComponent } from './code/code-test.component';
import { DatePickerTestComponent } from './date-picker/date-picker-test.component';
import { FormTestComponent } from './form/form-test.component';
import { InputTestComponent } from './input/input-test.component';
import { RadioTestComponent } from './radio/radio-test.component';
import { SelectTestComponent } from './select/select-test.component';
import { SwitchTestComponent } from './switch/switch-test.component';
import { SwitcherTestComponent } from './switcher/switcher-test.component';

export const routes: Routes = [
  {
    path: 'button',
    component: ButtonTestComponent,
    data: {breadcrumb: 'Button', animation: 'Button'}
  },
  {
    path: 'form',
    component: FormTestComponent,
    data: {breadcrumb: 'Form', animation: 'Form'}
  },
  {
    path: 'input',
    component: InputTestComponent,
    data: {breadcrumb: 'Input', animation: 'Input'}
  },
  {
    path: 'checkbox',
    component: CheckboxTestComponent,
    data: {breadcrumb: 'Checkbox', animation: 'Checkbox'}
  },
  {
    path: 'radio',
    component: RadioTestComponent,
    data: {breadcrumb: 'Radio', animation: 'Radio'}
  },
  {
    path: 'select',
    component: SelectTestComponent,
    data: {breadcrumb: 'Select', animation: 'Select'}
  },
  {
    path: 'switch',
    component: SwitchTestComponent,
    data: {breadcrumb: 'Switch', animation: 'Switch'}
  },
  {
    path: 'switcher',
    component: SwitcherTestComponent,
    data: {breadcrumb: 'Switcher', animation: 'Switcher'}
  },
  {
    path: 'calendar',
    component: CalendarTestComponent,
    data: {breadcrumb: 'Calendar', animation: 'Calendar'}
  },
  {
    path: 'date-picker',
    component: DatePickerTestComponent,
    data: {breadcrumb: 'Date picker', animation: 'Date picker'}
  },
  {
    path: 'selectable',
    component: SelectableTestComponent,
    data: {breadcrumb: 'Selectable', animation: 'Selectable'}
  },
  {
    path: 'code',
    component: CodeTestComponent,
    data: {breadcrumb: 'Code', animation: 'Code'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
