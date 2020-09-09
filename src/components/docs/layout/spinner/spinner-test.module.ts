import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  SelectModule,
  SpinnerModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { SpinnerTestComponent } from './spinner-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    SelectModule,
    GridModule,
    SpinnerModule,
    SharedModule
  ],
  exports: [
    SpinnerTestComponent
  ],
  declarations: [
    SpinnerTestComponent
  ],
})
export class SpinnerTestModule {
}
