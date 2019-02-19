import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TESTS_ROUTES } from 'components/tests.routes';
import { InputTestComponent } from './input/input-test.component';
import { TestsComponent } from 'components/tests.component';
import { ButtonsTestComponent } from 'components/buttons/buttons-test.component';
import { GridTestComponent } from 'components/grid/grid-test.component';
import { StackTestComponent } from 'components/stack/stack-test.component';
import { BlocksTestComponent } from 'components/blocks/blocks-test.component';
import { SpinnerTestComponent } from 'components/spinner/spinner-test.component';
import { PagerTestComponent } from 'components/pager/pager-test.component';
import { CheckboxTestComponent } from 'components/checkbox/checkbox-test.component';
import { SwitchTestComponent } from 'components/switch/switch-test.component';
import { RadioTestComponent } from 'components/radio/radio-test.component';
import { SelectTestComponent } from 'components/select/select-test.component';
import { FormTestComponent } from './form/form-test.component';
import { IconTestComponent } from './icon-test/icon-test.component';
import { JunteUiModule } from 'junte-ui';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(TESTS_ROUTES),
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
    SelectTestComponent
  ]
})
export class TestsModule {
}
