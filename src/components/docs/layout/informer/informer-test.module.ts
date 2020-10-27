import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  BlockModule,
  ButtonModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  InformerModule,
  LinkModule,
  SelectModule,
  SkeletonModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from 'src/components/docs/shared/shared.module';
import { InformerTestComponent } from './informer-test.component';


@NgModule({
  declarations: [InformerTestComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InformerModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    GridModule,
    SkeletonModule,
    ButtonModule,
    SelectModule,
    SwitcherModule,
    BlockModule,
    CheckboxModule,
    SharedModule,
    InformerModule,
    AppLayoutModule
  ],
  exports: [InformerTestComponent]
})
export class InformerTestModule {
}
