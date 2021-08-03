import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ButtonModule,
  CarouselModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  InputModule,
  LinkModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { CarouselTestComponent } from 'src/components/handbook/dynamic/carousel/carousel-test.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    ButtonModule,
    CheckboxModule,
    CarouselModule,
    SharedModule,
    AppLayoutModule,
    SwitcherModule,
    InputModule
  ],
  exports: [
    CarouselTestComponent
  ],
  declarations: [
    CarouselTestComponent
  ],
})
export class CarouselTestModule {
}

