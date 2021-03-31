import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  CheckboxModule,
  DotModule,
  EmptyModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { EmptyTestComponent } from 'src/components/handbook/other/empty/empty-test.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    LinkModule,
    GridModule,
    StackModule,
    TabsModule,
    FormModule,
    SelectModule,
    AccordionModule,
    IconModule,
    DotModule,
    CheckboxModule,
    SharedModule,
    ReactiveFormsModule,
    AppLayoutModule,
    EmptyModule,
  ],
  exports: [
    EmptyTestComponent
  ],
  declarations: [
    EmptyTestComponent
  ]
})
export class EmptyTestModule {
}
