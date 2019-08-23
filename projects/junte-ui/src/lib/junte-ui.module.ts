import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MonthGanttModule } from './components/month-gantt/month-gantt.module';
import { AppLayoutModule } from './components/app-layout/app-layout.module';
import { AvatarModule } from './components/avatar/avatar.module';
import { BadgeModule } from './components/badge/badge.module';
import { BlockModule } from './components/block/block.module';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { ButtonModule } from './components/button/button.module';
import { CalendarModule } from './components/calendar/calendar.module';
import { CardModule } from './components/card/card.module';
import { ChartModule } from './components/chart/chart.module';
import { CheckboxModule } from './components/checkbox/checkbox.module';
import { CircleBarModule } from './components/circle-bar/circle-bar.module';
import { DotModule } from './components/dot/dot.module';
import { DropdownModule } from './components/dropdown/dropdown.module';
import { FormModule } from './components/form/form.module';
import { GridModule } from './components/grid/grid.module';
import { IconModule } from './components/icon/icon.module';
import { InputModule } from './components/input/input.module';
import { LabelModule } from './components/label/label.module';
import { LinkModule } from './components/link/link.module';
import { MenuModule } from './components/menu/menu.module';
import { ModalModule } from './components/modal/modal.module';
import { PaginationModule } from './components/pagination/pagination.module';
import { PopoverModule } from './components/popover/popover.module';
import { ProgressBarModule } from './components/progress-bar/progress-bar.module';
import { RadioModule } from './components/radio/radio.module';
import { SelectModule } from './components/select/select.module';
import { SkeletonModule } from './components/skeleton/skeleton.module';
import { SliderCarouselModule } from './components/slider/slider.module';
import { SpinnerModule } from './components/spinner/spinner.module';
import { StackModule } from './components/stack/stack.module';
import { SwitchModule } from './components/switch/switch.module';
import { SwitcherModule } from './components/switcher/switcher.module';
import { TableModule } from './components/table/table.module';
import { TabsModule } from './components/tabs/tabs.module';
import { ThemeSwitcherModule } from './components/theme-switcher/theme-switcher.module';
import { JunteDirectiveModule } from './directives/junte-directive.module';
import { JunteUiComponent } from './junte-ui.component';
import { AnimationPipeModule } from './pipes/animation-pipe.module';
import { DatePipeModule } from './pipes/date-pipe.module';
import { IncludesPipeModule } from './pipes/includes-pipe.module';
import { IsEqualModule } from './pipes/is-equal.module';
import { SanitizePipeModule } from './pipes/sanitize.module';
import { TextPipeModule } from './pipes/text-pipe.module';

@NgModule({
  declarations: [
    JunteUiComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
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
    IncludesPipeModule,
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
    MonthGanttModule
  ]
})
export class JunteUiModule {
}
