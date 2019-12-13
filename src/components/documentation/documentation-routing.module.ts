import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerTestComponent } from 'src/components/documentation/forms/date-picker/date-picker-test.component';
import { AppLayoutTestComponent } from './layout/app-layout/app-layout-test.component';
import { AvatarTestComponent } from './elements/avatar/avatar-test.component';
import { BadgeTestComponent } from './elements/badge/badge-test.component';
import { BlocksTestComponent } from './layout/blocks/blocks-test.component';
import { ButtonsTestComponent } from './forms/buttons/buttons-test.component';
import { CalendarTestComponent } from './forms/calendar/calendar-test.component';
import { ChartTestComponent } from './dynamic/chart/chart-test.component';
import { CheckboxTestComponent } from './forms/checkbox/checkbox-test.component';
import { CircleBarTestComponent } from './dynamic/circle-bar/circle-bar-test.component';
import { DocumentationComponent } from './documentation.component';
import { DropdownTestComponent } from './navigation/dropdown/dropdown-test.component';
import { FormTestComponent } from './forms/form/form-test.component';
import { GanttTestComponent } from './collections/gantt/gantt-test.component';
import { GridTestComponent } from './layout/grid/grid-test.component';
import { IconTestComponent } from './elements/icon/icon-test.component';
import { InputTestComponent } from './forms/input/input-test.component';
import { LabelTestComponent } from './elements/label/label-test.component';
import { LinkTestComponent } from './navigation/link/link-test.component';
import { MenuTestComponent } from './navigation/menu/menu-test.component';
import { ModalTestComponent } from './overlays/modal/modal-test.component';
import { PagerTestComponent } from './navigation/pager/pager-test.component';
import { PipesTestComponent } from './pipes/pipes-test.component';
import { PopoverTestComponent } from './overlays/popover/popover-test.component';
import { ProgressBarTestComponent } from './dynamic/progress-bar/progress-bar-test.component';
import { RadioTestComponent } from './forms/radio/radio-test.component';
import { SelectTestComponent } from './forms/select/select-test.component';
import { SkeletonTestComponent } from './layout/skeleton/skeleton-test.component';
import { SliderTestComponent } from './collections/slider/slider-test.component';
import { SpinnerTestComponent } from './layout/spinner/spinner-test.component';
import { StackTestComponent } from './layout/stack/stack-test.component';
import { SwitchTestComponent } from './forms/switch/switch-test.component';
import { SwitcherTestComponent } from './forms/switcher/switcher-test.component';
import { TableTestComponent } from './collections/table/table-test.component';
import { TabsTestComponent } from './navigation/tabs/tabs-test.component';
import { ThemingComponent } from './general/theming/theming.component';
import { TypographyTestComponent } from './general/typography/typography-test.component';
import { DatePeriodTestComponent } from './dynamic/date-period/date-period-test.component';
import { KanbanTestComponent } from './layout/kanban/kanban-test.component';
import { ConfirmTestComponent } from './shared/confirm/confirm-test.component';
import { AccordionTestComponent } from './layout/accordion/accordion-test.component';


export const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'theming'
      },
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
        loadChildren: () => import('./navigation/breadcrumbs/breadcrumbs.module').then(m => m.BreadcrumbsModule)
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
        path: 'gantt',
        component: GanttTestComponent,
        data: {breadcrumb: 'Gantt'}
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
        path: 'date-picker',
        component: DatePickerTestComponent,
        data: {breadcrumb: 'Date picker'}
      },
      {
        path: 'date-period',
        component: DatePeriodTestComponent,
        data: {breadcrumb: 'Date period'}
      },
      {
        path: 'kanban',
        component: KanbanTestComponent,
        data: {breadcrumb: 'Kanban'}
      },
      {
        path: 'accordion',
        component: AccordionTestComponent,
        data: {breadcrumb: 'Accordion'}
      },
      {
        path: 'confirm',
        component: ConfirmTestComponent,
        data: {breadcrumb: 'Confirm'}
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
