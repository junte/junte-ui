import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'junte-ui';
import { AppFooterModule } from 'src/components/app-footer/app-footer.module';
import { OutletModule } from 'src/components/outlet/outlet.module';
import { AccordionTestComponent } from './collections/accordion/accordion-test.component';
import { GanttTestComponent } from './collections/gantt/gantt-test.component';
import { KanbanTestComponent } from './collections/kanban/kanban-test.component';
import { SliderTestComponent } from './collections/slider/slider-test.component';
import { TableTestComponent } from './collections/table/table-test.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
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
import { DatePickerTestComponent } from './forms/date-picker/date-picker-test.component';
import { FormTestComponent } from './forms/form/form-test.component';
import { InputTestComponent } from './forms/input/input-test.component';
import { RadioTestComponent } from './forms/radio/radio-test.component';
import { SelectTestComponent } from './forms/select/select-test.component';
import { SwitchTestComponent } from './forms/switch/switch-test.component';
import { SwitcherTestComponent } from './forms/switcher/switcher-test.component';
import { ThemingComponent } from './general/theming/theming.component';
import { TypographyTestComponent } from './general/typography/typography-test.component';
import { AppLayoutTestComponent } from './layout/app/app-layout-test.component';
import { BlockTestComponent } from './layout/block/block-test.component';
import { GridTestComponent } from './layout/grid/grid-test.component';
import { SkeletonTestComponent } from './layout/skeleton/skeleton-test.component';
import { SpinnerTestComponent } from './layout/spinner/spinner-test.component';
import { StackTestComponent } from './layout/stack/stack-test.component';
import { AnchorTestComponent } from './navigation/anchor/anchor-test.component';
import { DropdownTestComponent } from './navigation/dropdown/dropdown-test.component';
import { LinkTestComponent } from './navigation/link/link-test.component';
import { MenuTestComponent } from './navigation/menu/menu-test.component';
import { PaginationTestComponent } from './navigation/pagination/pagination-test.component';
import { TabsTestComponent } from './navigation/tabs/tabs-test.component';
import { ModalTestComponent } from './overlays/modal/modal-test.component';
import { ModalTestFactoryComponent } from './overlays/modal/test.component';
import { PopoverTestComponent } from './overlays/popover/popover-test.component';
import { PipesTestComponent } from './pipes/pipes-test.component';
import { BrowserPreviewModule } from './shared/browser-preview/browser-preview.module';
import { CodeHighlightModule } from './shared/code-highlight/code-highlight.module';
import { ComponentApiComponent } from './shared/component-api/component-api.component';
import { ConfirmTestComponent } from './shared/confirm/confirm-test.component';
import { HowToUseModule } from './shared/how-to-use/how-to-use.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrismModule,
    JunteUiModule,
    DocumentationRoutingModule,
    AppFooterModule,
    OutletModule,
    BrowserPreviewModule,
    CodeHighlightModule,
    HowToUseModule
  ],
  declarations: [
    DocumentationComponent,
    PaginationTestComponent,
    PipesTestComponent,
    ButtonsTestComponent,
    GridTestComponent,
    StackTestComponent,
    InputTestComponent,
    BlockTestComponent,
    SpinnerTestComponent,
    CheckboxTestComponent,
    RadioTestComponent,
    SwitchTestComponent,
    FormTestComponent,
    IconTestComponent,
    SwitchTestComponent,
    SelectTestComponent,
    BadgeTestComponent,
    AppLayoutTestComponent,
    AvatarTestComponent,
    TableTestComponent,
    LinkTestComponent,
    CalendarTestComponent,
    LabelTestComponent,
    SkeletonTestComponent,
    TabsTestComponent,
    MenuTestComponent,
    TypographyTestComponent,
    CircleBarTestComponent,
    DropdownTestComponent,
    ModalTestComponent,
    ThemingComponent,
    PopoverTestComponent,
    ModalTestFactoryComponent,
    ProgressBarTestComponent,
    ChartTestComponent,
    SliderTestComponent,
    SwitcherTestComponent,
    GanttTestComponent,
    DatePickerTestComponent,
    DatePeriodTestComponent,
    KanbanTestComponent,
    KanbanTestComponent,
    ComponentApiComponent,
    AccordionTestComponent,
    ConfirmTestComponent,
    AnchorTestComponent
  ],
  entryComponents: [
    ModalTestFactoryComponent
  ]
})
export class DocumentationModule {
}
