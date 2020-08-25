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
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    SwitcherModule.forRoot(JUNTE_UI_CONFIG),
    CheckboxModule.forRoot(JUNTE_UI_CONFIG),
    FilterModule.forRoot(JUNTE_UI_CONFIG),
    AvatarModule.forRoot(JUNTE_UI_CONFIG),
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
