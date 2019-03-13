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
import { FormTestComponent } from 'components/form/form-test.component';
import { SelectTestComponent } from 'components/select/select-test.component';
import { BadgeTestComponent } from 'components/badge/badge-test.component';
import { AppLayoutTestComponent } from 'components/app-layout/app-layout-test.component';
import { IconTestComponent } from 'components/icon/icon-test.component';
import { TableTestComponent } from 'components/table/table-test.component';
import { AvatarTestComponent } from 'components/avatar/avatar-test.component';
import { LinkTestComponent } from 'components/link/link-test.component';
import { CalendarTestComponent } from 'components/calendar/calendar.component';

export const TESTS_ROUTES: Routes = [
  {
    path: 'pager',
    component: PagerTestComponent
  },
  {
    path: 'button',
    component: ButtonsTestComponent
  },
  {
    path: 'calendar',
    component: CalendarTestComponent
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
    path: 'block',
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
    path: 'select',
    component: SelectTestComponent
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
    path: 'badge',
    component: BadgeTestComponent
  },
  {
    path: 'layout',
    component: AppLayoutTestComponent
  },
  {
    path: 'table',
    component: TableTestComponent
  },
  {
    path: 'avatar',
    component: AvatarTestComponent
  },
  {
    path: 'link',
    component: LinkTestComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'grid'
  }
];
