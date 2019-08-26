import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthGanttTestComponent } from './month-gantt/month-gantt-test.component';
import { AppLayoutTestComponent } from './app-layout/app-layout-test.component';
import { AvatarTestComponent } from './avatar/avatar-test.component';
import { BadgeTestComponent } from './badge/badge-test.component';
import { BlocksTestComponent } from './blocks/blocks-test.component';
import { ButtonsTestComponent } from './buttons/buttons-test.component';
import { CalendarTestComponent } from './calendar/calendar-test.component';
import { ChartTestComponent } from './chart/chart-test.component';
import { CheckboxTestComponent } from './checkbox/checkbox-test.component';
import { CircleBarTestComponent } from './circle-bar/circle-bar-test.component';
import { DocumentationComponent } from './documentation.component';
import { DropdownTestComponent } from './dropdown/dropdown-test.component';
import { FormTestComponent } from './form/form-test.component';
import { GridTestComponent } from './grid/grid-test.component';
import { IconTestComponent } from './icon/icon-test.component';
import { InputTestComponent } from './input/input-test.component';
import { LabelTestComponent } from './label/label-test.component';
import { LinkTestComponent } from './link/link-test.component';
import { MenuTestComponent } from './menu/menu-test.component';
import { ModalTestComponent } from './modal/modal-test.component';
import { PagerTestComponent } from './pager/pager-test.component';
import { PipesTestComponent } from './pipes/pipes-test.component';
import { PopoverTestComponent } from './popover/popover-test.component';
import { ProgressBarTestComponent } from './progress-bar/progress-bar-test.component';
import { RadioTestComponent } from './radio/radio-test.component';
import { SelectTestComponent } from './select/select-test.component';
import { SkeletonTestComponent } from './skeleton/skeleton-test.component';
import { SliderTestComponent } from './slider/slider-test.component';
import { SpinnerTestComponent } from './spinner/spinner-test.component';
import { StackTestComponent } from './stack/stack-test.component';
import { SwitchTestComponent } from './switch/switch-test.component';
import { SwitcherTestComponent } from './switcher/switcher-test.component';
import { TableTestComponent } from './table/table-test.component';
import { TabsTestComponent } from './tabs/tabs-test.component';
import { ThemingComponent } from './theming/theming.component';
import { TypographyTestComponent } from './typography/typography-test.component';


export const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
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
        loadChildren: './breadcrumbs/breadcrumbs.module#BreadcrumbsModule'
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
        path: 'slider',
        component: SliderTestComponent,
        data: {breadcrumb: 'Slider'}
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
        path: 'progress-bar',
        component: ProgressBarTestComponent,
        data: {breadcrumb: 'Progress bar'}
      },
      {
        path: 'chart',
        component: ChartTestComponent,
        data: {breadcrumb: 'Chart'}
      },
      {
        path: 'month-gantt',
        component: MonthGanttTestComponent,
        data: {breadcrumb: 'Month-gantt'}
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule {
}
