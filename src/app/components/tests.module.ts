import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrismModule } from '@ngx-prism/core';
import { BlocksTestComponent } from 'components/blocks/blocks-test.component';
import { ButtonsTestComponent } from 'components/buttons/buttons-test.component';
import { CheckboxTestComponent } from 'components/checkbox/checkbox-test.component';
import { CircleBarTestComponent } from 'components/circle-bar/circle-bar-test.component';
import { GridTestComponent } from 'components/grid/grid-test.component';
import { ModalTestComponent } from 'components/modal/modal-test.component';
import { ModalTestFactoryComponent } from 'components/modal/test.component';
import { PagerTestComponent } from 'components/pager/pager-test.component';
import { PopoverTestComponent } from 'components/popover/popover-test.component';
import { RadioTestComponent } from 'components/radio/radio-test.component';
import { SelectTestComponent } from 'components/select/select-test.component';
import { SpinnerTestComponent } from 'components/spinner/spinner-test.component';
import { StackTestComponent } from 'components/stack/stack-test.component';
import { SwitchTestComponent } from 'components/switch/switch-test.component';
import { TestsComponent } from 'components/tests.component';

import { TESTS_ROUTES } from 'components/tests.routes';
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(TESTS_ROUTES),
    PrismModule,
    JunteUiModule
  ],
  declarations: [
    TestsComponent,
    PagerTestComponent,
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
    ModalTestFactoryComponent
  ],
  entryComponents: [
    ModalTestFactoryComponent
  ]
})
export class TestsModule {
}
