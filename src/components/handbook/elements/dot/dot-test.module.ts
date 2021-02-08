import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule, ArrayPipesModule, CheckboxModule,
  DotModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { DotTestComponent } from './dot-test.component';
import { DotBenchmarkComponent } from './benchmark/dot-benchmark.component';

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
    SelectModule,
    AccordionModule,
    DotModule,
    SharedModule,
    AppLayoutModule,
    CheckboxModule,
    ArrayPipesModule
  ],
  exports: [
    DotTestComponent
  ],
  declarations: [
    DotTestComponent,
    DotBenchmarkComponent
  ],
})
export class DotTestModule {
}

