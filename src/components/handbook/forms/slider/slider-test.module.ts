import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  FormModule,
  GridModule,
  IconModule,
  InputModule,
  LinkModule,
  SelectModule,
  SliderModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from 'src/components/handbook/shared/shared.module';
import { SliderTestComponent } from './slider-test.component';


@NgModule({
  declarations: [
    SliderTestComponent
  ],
  exports: [
    SliderTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    SelectModule,
    AccordionModule,
    SliderModule,
    SharedModule,
    AppLayoutModule,
    InputModule
  ]
})
export class SliderTestModule {
}
