import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePickerModule } from './components/forms/date-picker/date-picker.module';
import { AppLayoutModule } from './components/layout/app-layout/app-layout.module';
import { AvatarModule } from './components/ui-elements/avatar/avatar.module';
import { BadgeModule } from './components/ui-elements/badge/badge.module';
import { BlockModule } from './components/layout/block/block.module';
import { BreadcrumbsModule } from './components/navigation/breadcrumbs/breadcrumbs.module';
import { ButtonModule } from './components/forms/button/button.module';
import { CalendarModule } from './components/forms/calendar/calendar.module';
import { CardModule } from './components/card/card.module';
import { ChartModule } from './components/dynamic-data/chart/chart.module';
import { CheckboxModule } from './components/forms/checkbox/checkbox.module';
import { CircleBarModule } from './components/dynamic-data/circle-bar/circle-bar.module';
import { DotModule } from './components/forms/dot/dot.module';
import { DropdownModule } from './components/navigation/dropdown/dropdown.module';
import { FormModule } from './components/forms/form/form.module';
import { GanttModule } from './components/collections/gantt/gantt.module';
import { GridModule } from './components/layout/grid/grid.module';
import { AnimatedIconModule } from './components/ui-elements/icon/animated-icon/animated-icon.module';
import { FontIconModule } from './components/ui-elements/icon/font-icon/font-icon.module';
import { IconModule } from './components/ui-elements/icon/icon.module';
import { SvgIconModule } from './components/ui-elements/icon/svg-icon/svg-icon.module';
import { InputModule } from './components/forms/input/input.module';
import { LabelModule } from './components/ui-elements/label/label.module';
import { LinkModule } from './components/navigation/link/link.module';
import { MenuModule } from './components/navigation/menu/menu.module';
import { ModalModule } from './components/overlays/modal/modal.module';
import { PaginationModule } from './components/navigation/pagination/pagination.module';
import { PopoverModule } from './components/overlays/popover/popover.module';
import { ProgressBarModule } from './components/dynamic-data/progress-bar/progress-bar.module';
import { RadioModule } from './components/forms/radio/radio.module';
import { SelectModule } from './components/forms/select/select.module';
import { SkeletonModule } from './components/layout/skeleton/skeleton.module';
import { SliderCarouselModule } from './components/collections/slider/slider.module';
import { SpinnerModule } from './components/layout/spinner/spinner.module';
import { StackModule } from './components/layout/stack/stack.module';
import { SwitchModule } from './components/forms/switch/switch.module';
import { SwitcherModule } from './components/forms/switcher/switcher.module';
import { TableModule } from './components/collections/table/table.module';
import { TabsModule } from './components/navigation/tabs/tabs.module';
import { ThemeSwitcherModule } from './components/general/theme-switcher/theme-switcher.module';
import { JunteDirectiveModule } from './directives/junte-directive.module';
import { JunteUiComponent } from './junte-ui.component';
import { AnimationPipeModule } from './pipes/animation-pipe.module';
import { DatePipeModule } from './pipes/date-pipe.module';
import { IsEqualModule } from './pipes/is-equal.module';
import { SanitizePipeModule } from './pipes/sanitize.module';
import { TextPipeModule } from './pipes/text-pipe.module';
import { DatePeriodModule } from './components/dynamic-data/date-period/date-period.module';
import { KanbanModule } from './components/layout/kanban/kanban.module';
import { ArrayPipeModule } from './pipes/array-pipe.module';

@NgModule({
  declarations: [
    JunteUiComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    AppLayoutModule,
    AnimationPipeModule,
    AvatarModule,
    BadgeModule,
    BlockModule,
    BreadcrumbsModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    CircleBarModule,
    DropdownModule,
    DatePipeModule,
    DotModule,
    IsEqualModule,
    TextPipeModule,
    FormModule,
    GridModule,
    JunteDirectiveModule,
    IconModule,
    AnimatedIconModule,
    SvgIconModule,
    FontIconModule,
    ArrayPipeModule,
    InputModule,
    LabelModule,
    LinkModule,
    MenuModule,
    PaginationModule,
    ModalModule,
    RadioModule,
    SanitizePipeModule,
    SelectModule,
    SkeletonModule,
    SliderCarouselModule,
    SpinnerModule,
    StackModule,
    SwitchModule,
    SwitcherModule,
    TableModule,
    TabsModule,
    PopoverModule,
    ProgressBarModule,
    ChartModule,
    ThemeSwitcherModule,
    GanttModule,
    DatePickerModule,
    DatePeriodModule,
    KanbanModule
  ]
})
export class JunteUiModule {
}
