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
import { CalendarTestComponent } from 'components/calendar/calendar-test.component';
import { LabelTestComponent } from 'components/label/label-test.component';
import { SkeletonTestComponent } from 'components/skeleton/skeleton-test.component';
import { TabsTestComponent } from 'components/tabs/tabs-test.component';
import { MenuTestComponent } from 'components/menu/menu-test.component';
import { TypographyTestComponent } from 'components/typography/typography-test.component';
import { CircleBarTestComponent } from 'components/circle-bar/circle-bar-test.component';
import { DropdownTestComponent } from 'components/dropdown/dropdown-test.component';
import { ThemingComponent } from 'components/theming/theming.component';
import { PopoverTestComponent } from 'components/popover/popover-test.component';
import { ModalTestComponent } from 'components/modal/modal-test.component';
import { PipesTestComponent } from 'components/pipes/pipes-test.component';

export const TESTS_ROUTES: Routes = [
  {
    path: 'pager',
    component: PagerTestComponent,
    data: {breadcrumb: 'Pager'}
  },
  {
    path: 'button',
    component: ButtonsTestComponent,
    data: {breadcrumb: 'Button'}
  },
  {
    path: 'calendar',
    component: CalendarTestComponent,
    data: {breadcrumb: 'Calendar'}

  },
  {
    path: 'grid',
    component: GridTestComponent,
    data: {breadcrumb: 'Grid'}
  },
  {
    path: 'breadcrumbs',
    data: {breadcrumb: {label: 'Breadcrumbs'}},
    loadChildren: 'components/breadcrumbs/breadcrumbs.module#BreadcrumbsModule'
  },
  {
    path: 'switch',
    component: SwitchTestComponent,
    data: {breadcrumb: 'Switch'}
  },
  {
    path: 'stack',
    component: StackTestComponent,
    data: {breadcrumb: 'Stack'}
  },
  {
    path: 'spinner',
    component: SpinnerTestComponent,
    data: {breadcrumb: 'Spinner'}
  },
  {
    path: 'block',
    component: BlocksTestComponent,
    data: {breadcrumb: 'Block'}
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
    path: 'input',
    component: InputTestComponent,
    data: {breadcrumb: 'Input'}
  },
  {
    path: 'modal',
    component: ModalTestComponent,
    data: {breadcrumb: 'Modal'}
  },
  {
    path: 'select',
    component: SelectTestComponent,
    data: {breadcrumb: 'Select'}
  },
  {
    path: 'dropdown',
    component: DropdownTestComponent,
    data: {breadcrumb: 'Dropdown'}
  },
  {
    path: 'form',
    component: FormTestComponent,
    data: {breadcrumb: 'Form'}
  },
  {
    path: 'icon',
    component: IconTestComponent,
    data: {breadcrumb: 'Icon'}
  },
  {
    path: 'badge',
    component: BadgeTestComponent,
    data: {breadcrumb: 'Badge'}
  },
  {
    path: 'layout',
    component: AppLayoutTestComponent,
    data: {breadcrumb: 'Layout'}

  },
  {
    path: 'table',
    component: TableTestComponent,
    data: {breadcrumb: 'Table'}
  },
  {
    path: 'avatar',
    component: AvatarTestComponent,
    data: {breadcrumb: 'Avatar'}
  },
  {
    path: 'link',
    component: LinkTestComponent,
    data: {breadcrumb: 'Link'}
  },
  {
    path: 'label',
    component: LabelTestComponent,
    data: {breadcrumb: 'Label'}
  },
  {
    path: 'skeleton',
    component: SkeletonTestComponent,
    data: {breadcrumb: 'Skeleton'}
  },
  {
    path: 'tabs',
    component: TabsTestComponent,
    data: {breadcrumb: 'Tabs'}
  },
  {
    path: 'menu',
    component: MenuTestComponent,
    data: {breadcrumb: 'Menu'}
  },
  {
    path: 'typography',
    component: TypographyTestComponent,
    data: {breadcrumb: 'Typography'}
  },
  {
    path: 'circle-bar',
    component: CircleBarTestComponent,
    data: {breadcrumb: 'Circle-bar'}
  },
  {
    path: 'theming',
    component: ThemingComponent,
    data: {breadcrumb: 'Theming'}
  },
  {
    path: 'popover',
    component: PopoverTestComponent
  },
  {
    path: 'pipes',
    component: PipesTestComponent,
    data: {breadcrumb: 'Pipes'}
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'grid'
  }
];
