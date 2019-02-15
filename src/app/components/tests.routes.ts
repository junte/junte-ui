import { Routes } from '@angular/router';
import { PagerTestComponent } from 'components/pager/pager-test.component';
import { ButtonsTestComponent } from 'components/buttons/buttons-test.component';
import { GridTestComponent } from 'components/grid/grid-test.component';
import { SwitchTestComponent } from 'components/switch/switch-test.component';
import { StackTestComponent } from 'components/stack/stack-test.component';
import { SpinnerTestComponent } from 'components/spinner/spinner-test.component';
import { BlocksTestComponent } from 'components/blocks/blocks-test.component';
import { CheckboxTestComponent } from 'components/checkbox/checkbox-test.component';
import { RadioTestComponent } from 'components/radio/radio-test.component';
import { InputTestComponent } from 'components/input/input-test.component';
import {FormTestComponent} from 'components/form/form-test.component';
import {IconTestComponent} from 'components/icon-test/icon-test.component';

export const TESTS_ROUTES: Routes = [
  {
    path: 'pager',
    component: PagerTestComponent
  },
  {
    path: 'buttons',
    component: ButtonsTestComponent
  },
  {
    path: 'grid',
    component: GridTestComponent
  },
  {
    path: 'switch',
    component: SwitchTestComponent
  },
  {
    path: 'stack',
    component: StackTestComponent
  },
  {
    path: 'spinner',
    component: SpinnerTestComponent
  },
  {
    path: 'blocks',
    component: BlocksTestComponent
  },
  {
    path: 'checkbox',
    component: CheckboxTestComponent
  },
  {
    path: 'radio',
    component: RadioTestComponent
  },
  {
    path: 'input',
    component: InputTestComponent
  },
  {
    path: 'form',
    component: FormTestComponent
  },
  {
    path: 'icon',
    component: IconTestComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'grid'
  }
];
