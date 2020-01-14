import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerTestComponent } from 'src/components/documentation/forms/date-picker/date-picker-test.component';
import { OutletComponent } from 'src/components/outlet/outlet.component';
import { GanttTestComponent } from './collections/gantt/gantt-test.component';
import { SliderTestComponent } from './collections/slider/slider-test.component';
import { TableTestComponent } from './collections/table/table-test.component';
import { DocumentationComponent } from './documentation.component';
import { ChartTestComponent } from './dynamic/chart/chart-test.component';
import { CircleBarTestComponent } from './dynamic/circle-bar/circle-bar-test.component';
import { DatePeriodTestComponent } from './dynamic/date-period/date-period-test.component';
import { ProgressBarTestComponent } from './dynamic/progress-bar/progress-bar-test.component';
import { AvatarTestComponent } from './elements/avatar/avatar-test.component';
import { BadgeTestComponent } from './elements/badge/badge-test.component';
import { IconTestComponent } from './elements/icon/icon-test.component';
import { LabelTestComponent } from './elements/label/label-test.component';
import { ButtonsTestComponent } from './forms/buttons/buttons-test.component';
import { CalendarTestComponent } from './forms/calendar/calendar-test.component';
import { CheckboxTestComponent } from './forms/checkbox/checkbox-test.component';
import { FormTestComponent } from './forms/form/form-test.component';
import { InputTestComponent } from './forms/input/input-test.component';
import { RadioTestComponent } from './forms/radio/radio-test.component';
import { SelectTestComponent } from './forms/select/select-test.component';
import { SwitchTestComponent } from './forms/switch/switch-test.component';
import { SwitcherTestComponent } from './forms/switcher/switcher-test.component';
import { ThemingComponent } from './general/theming/theming.component';
import { TypographyTestComponent } from './general/typography/typography-test.component';
import { AccordionTestComponent } from './layout/accordion/accordion-test.component';
import { AppLayoutTestComponent } from './layout/app-layout/app-layout-test.component';
import { BlocksTestComponent } from './layout/blocks/blocks-test.component';
import { GridTestComponent } from './layout/grid/grid-test.component';
import { KanbanTestComponent } from './layout/kanban/kanban-test.component';
import { SkeletonTestComponent } from './layout/skeleton/skeleton-test.component';
import { SpinnerTestComponent } from './layout/spinner/spinner-test.component';
import { StackTestComponent } from './layout/stack/stack-test.component';
import { DropdownTestComponent } from './navigation/dropdown/dropdown-test.component';
import { LinkTestComponent } from './navigation/link/link-test.component';
import { MenuTestComponent } from './navigation/menu/menu-test.component';
import { PagerTestComponent } from './navigation/pager/pager-test.component';
import { TabsTestComponent } from './navigation/tabs/tabs-test.component';
import { ModalTestComponent } from './overlays/modal/modal-test.component';
import { PopoverTestComponent } from './overlays/popover/popover-test.component';
import { PipesTestComponent } from './pipes/pipes-test.component';
import { ConfirmTestComponent } from './shared/confirm/confirm-test.component';


export const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'general'
      },
      {
        path: 'general',
        component: OutletComponent,
        data: {breadcrumb: 'General'},
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'theming'
          },
          {
            path: 'theming',
            component: ThemingComponent,
            data: {breadcrumb: 'Theming'}
          },
          {
            path: 'typography',
            component: TypographyTestComponent,
            data: {breadcrumb: 'Typography'}
          }
        ]
      },
      {
        path: 'layout',
        component: OutletComponent,
        data: {breadcrumb: 'Layout'},
        children: [
          {
            path: 'grid',
            component: GridTestComponent,
            data: {breadcrumb: 'Grid'}
          },
          {
            path: 'stack',
            component: StackTestComponent,
            data: {breadcrumb: 'Stack'}
          },
          {
            path: 'block',
            component: BlocksTestComponent,
            data: {breadcrumb: 'Block'}
          },
          {
            path: 'spinner',
            component: SpinnerTestComponent,
            data: {breadcrumb: 'Spinner'}
          },
          {
            path: 'application',
            component: AppLayoutTestComponent,
            data: {breadcrumb: 'Application'}
          },
          {
            path: 'skeleton',
            component: SkeletonTestComponent,
            data: {breadcrumb: 'Skeleton'}
          }
        ]
      },
      {
        path: 'navigation',
        component: OutletComponent,
        data: {breadcrumb: 'Navigation'},
        children: [
          {
            path: 'link',
            component: LinkTestComponent,
            data: {breadcrumb: 'Link'}
          },
          {
            path: 'menu',
            component: MenuTestComponent,
            data: {breadcrumb: 'Menu'}
          },
          {
            path: 'tabs',
            component: TabsTestComponent,
            data: {breadcrumb: 'Tabs'}
          },
          {
            path: 'pagination',
            component: PagerTestComponent,
            data: {breadcrumb: 'Pagination'}
          },
          {
            path: 'dropdown',
            component: DropdownTestComponent,
            data: {breadcrumb: 'Dropdown'}
          },
          {
            path: 'breadcrumbs',
            data: {breadcrumb: {label: 'Breadcrumbs'}},
            loadChildren: () => import('./navigation/breadcrumbs/breadcrumbs.module').then(m => m.BreadcrumbsModule)
          }
        ]
      },
      {
        path: 'ui-elements',
        component: OutletComponent,
        data: {breadcrumb: 'UI Elements'},
        children: [
          {
            path: 'icon',
            component: IconTestComponent,
            data: {breadcrumb: 'Icon'}
          },
          {
            path: 'avatar',
            component: AvatarTestComponent,
            data: {breadcrumb: 'Avatar'}
          },
          {
            path: 'badge',
            component: BadgeTestComponent,
            data: {breadcrumb: 'Badge'}
          },
          {
            path: 'label',
            component: LabelTestComponent,
            data: {breadcrumb: 'Label'}
          }
        ]
      },
      {
        path: 'forms',
        component: OutletComponent,
        data: {breadcrumb: 'Forms'},
        children: [
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
        ]
      },
      {
        path: 'collections',
        component: OutletComponent,
        data: {breadcrumb: 'Collections'},
        children: [
          {
            path: 'gantt',
            component: GanttTestComponent,
            data: {breadcrumb: 'Gantt'}
          },
          {
            path: 'table',
            component: TableTestComponent,
            data: {breadcrumb: 'Table'}
          },
          {
            path: 'slider',
            component: SliderTestComponent,
            data: {breadcrumb: 'Slider'}
          },
          {
            path: 'accordion',
            component: AccordionTestComponent,
            data: {breadcrumb: 'Accordion'}
          },
          {
            path: 'kanban',
            component: KanbanTestComponent,
            data: {breadcrumb: 'Kanban'}
          }
        ]
      },
      {
        path: 'overlays',
        component: OutletComponent,
        data: {breadcrumb: 'Overlays'},
        children: [
          {
            path: 'modal',
            component: ModalTestComponent,
            data: {breadcrumb: 'Modal'}
          },
          {
            path: 'popover',
            component: PopoverTestComponent,
            data: {breadcrumb: 'Popover'}
          },
        ]
      },
      {
        path: 'dynamic-data',
        component: OutletComponent,
        data: {breadcrumb: 'Dynamic Data'},
        children: [
          {
            path: 'progress-bar',
            component: ProgressBarTestComponent,
            data: {breadcrumb: 'Progress bar'}
          },
          {
            path: 'circle-bar',
            component: CircleBarTestComponent,
            data: {breadcrumb: 'Circle-bar'}
          },
          {
            path: 'chart',
            component: ChartTestComponent,
            data: {breadcrumb: 'Chart'}
          },
          {
            path: 'date-period',
            component: DatePeriodTestComponent,
            data: {breadcrumb: 'Date period'}
          },
        ]
      },
      {
        path: 'other',
        component: OutletComponent,
        data: {breadcrumb: 'Other'},
        children: [
          {
            path: 'pipes',
            component: PipesTestComponent,
            data: {breadcrumb: 'Pipes'}
          },
          {
            path: 'confirm',
            component: ConfirmTestComponent,
            data: {breadcrumb: 'Confirm'}
          }
        ]
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
