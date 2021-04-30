import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ArrayPipesModule,
  BlockModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  SelectModule,
  SkeletonModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { SkeletonTestComponent } from './skeleton-test.component';

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
    GridModule,
    SkeletonModule,
    BlockModule,
    CheckboxModule,
    SharedModule,
    ArrayPipesModule,
    AppLayoutModule
  ],
  exports: [
    SkeletonTestComponent
  ],
  declarations: [
    SkeletonTestComponent
  ],
})
export class SkeletonTestModule {
}
