import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsTestComponent } from './buttons/buttons-test.component';
import { CalendarTestComponent } from './calendar/calendar-test.component';
import { CheckboxTestComponent } from './checkbox/checkbox-test.component';
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
    component: ButtonsTestComponent,
    data: {breadcrumb: 'Button'}
  },
  {
    path: 'form',
    component: FormTestComponent,
    data: {breadcrumb: 'Form'}
  },
  {
    path: 'input',
    component: InputTestComponent,
    data: {breadcrumb: 'Input'}
  },
  {
    path: 'checkbox',
    component: CheckboxTestComponent,
    data: {breadcrumb: 'Checkbox'}
  },
  {
    path: 'radio',
    component: RadioTestComponent,
    data: {breadcrumb: 'Radio'}
  },
  {
    path: 'select',
    component: SelectTestComponent,
    data: {breadcrumb: 'Select'}
  },
  {
    path: 'switch',
    component: SwitchTestComponent,
    data: {breadcrumb: 'Switch'}
  },
  {
    path: 'switcher',
    component: SwitcherTestComponent,
    data: {breadcrumb: 'Switcher'}
  },
  {
    path: 'calendar',
    component: CalendarTestComponent,
    data: {breadcrumb: 'Calendar'}
  },
  {
    path: 'date-picker',
    component: DatePickerTestComponent,
    data: {breadcrumb: 'Date picker'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}