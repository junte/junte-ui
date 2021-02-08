import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ArrayPipesModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  PopoverModule,
  ResponsiveModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { ResponsiveTestComponent } from './responsive-test.component';
import { SharedModule } from '../../shared/shared.module';

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
    PopoverModule,
    ResponsiveModule,
    ArrayPipesModule,
    SharedModule,
    AppLayoutModule
  ],
  exports: [
    ResponsiveTestComponent
  ],
  declarations: [
    ResponsiveTestComponent
  ],
})
export class ResponsiveTestModule {
}

