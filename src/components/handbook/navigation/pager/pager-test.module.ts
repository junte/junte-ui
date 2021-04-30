import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ArrayPipesModule,
  BlockModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  PagerModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { PagerTestComponent } from './pager-test.component';

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
    SwitcherModule,
    PagerModule,
    BlockModule,
    ArrayPipesModule,
    SharedModule,
    ArrayPipesModule,
    AppLayoutModule
  ],
  exports: [
    PagerTestComponent
  ],
  declarations: [
    PagerTestComponent
  ],
})
export class PagerTestModule {
}
