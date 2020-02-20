import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  FormModule,
  AccordionModule,
  SelectModule,
  SkeletonModule,
  BlockModule,
  CheckboxModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { SkeletonTestComponent } from './skeleton-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
    SharedModule
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
