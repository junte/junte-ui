import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { DocumentationComponent } from 'src/components/documentation/documentation.component';

import { DocumentationRoutingModule } from 'src/components/documentation/documentation-routing.module';
import { JunteUiModule } from 'junte-ui';
import { AppLayoutTestComponent } from './app-layout/app-layout-test.component';
import { AvatarTestComponent } from './avatar/avatar-test.component';
import { BadgeTestComponent } from './badge/badge-test.component';
import { CalendarTestComponent } from './calendar/calendar-test.component';
import { DropdownTestComponent } from './dropdown/dropdown-test.component';
import { FormTestComponent } from './form/form-test.component';
import { IconTestComponent } from './icon/icon-test.component';
import { InputTestComponent } from './input/input-test.component';
import { LabelTestComponent } from './label/label-test.component';
import { LinkTestComponent } from './link/link-test.component';
import { MenuTestComponent } from './menu/menu-test.component';
import { SkeletonTestComponent } from './skeleton/skeleton-test.component';
import { TableTestComponent } from './table/table-test.component';
import { TabsTestComponent } from './tabs/tabs-test.component';
import { ThemingComponent } from './theming/theming.component';
import { TypographyTestComponent } from './typography/typography-test.component';
import { PagerTestComponent } from './pager/pager-test.component';
import { PipesTestComponent } from './pipes/pipes-test.component';
import { ButtonsTestComponent } from './buttons/buttons-test.component';
import { SelectTestComponent } from './select/select-test.component';
import { SwitchTestComponent } from './switch/switch-test.component';
import { RadioTestComponent } from './radio/radio-test.component';
import { CheckboxTestComponent } from './checkbox/checkbox-test.component';
import { SpinnerTestComponent } from './spinner/spinner-test.component';
import { BlocksTestComponent } from './blocks/blocks-test.component';
import { StackTestComponent } from './stack/stack-test.component';
import { GridTestComponent } from './grid/grid-test.component';
import { CircleBarTestComponent } from './circle-bar/circle-bar-test.component';
import { ModalTestComponent } from './modal/modal-test.component';
import { ModalTestFactoryComponent } from './modal/test.component';
import { PopoverTestComponent } from './popover/popover-test.component';
import { ProgressBarTestComponent } from './progress-bar/progress-bar-test.component';
import { ChartTestComponent } from './chart/chart-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrismModule,
    JunteUiModule,
    DocumentationRoutingModule
  ],
  declarations: [
    DocumentationComponent,
    PagerTestComponent,
    PipesTestComponent,
    ButtonsTestComponent,
    GridTestComponent,
    StackTestComponent,
    InputTestComponent,
    BlocksTestComponent,
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
    ChartTestComponent
  ],
  entryComponents: [
    ModalTestFactoryComponent
  ]
})
export class DocumentationModule {
}
