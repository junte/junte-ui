import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ArrayPipesModule,
  AvatarModule,
  CheckboxModule,
  FilterModule,
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
import { FilterTestComponent } from './filter-test.component';

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
    FilterModule,
    AvatarModule,
    ResponsiveModule,
    SharedModule,
    ArrayPipesModule,
    AppLayoutModule
  ],
  exports: [
    FilterTestComponent
  ],
  declarations: [
    FilterTestComponent
  ],
})
export class FilterTestModule {
}
