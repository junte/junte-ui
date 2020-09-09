import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
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
import { FilterTestComponent } from './filter-test.component';
import { SharedModule } from '../../shared/shared.module';
import { JUNTE_UI_CONFIG } from 'src/consts';

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
    ArrayPipesModule
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
