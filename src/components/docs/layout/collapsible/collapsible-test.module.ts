import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ArrayPipesModule,
  CheckboxModule,
  CollapsibleModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  ResponsiveModule,
  SelectModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { CollapsibleTestComponent } from './collapsible-test.component';

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
    SwitcherModule,
    CheckboxModule,
    CollapsibleModule,
    ResponsiveModule,
    ArrayPipesModule,
    SharedModule,
    AppLayoutModule
  ],
  exports: [
    CollapsibleTestComponent
  ],
  declarations: [
    CollapsibleTestComponent
  ],
})
export class CollapsibleTestModule {
}
