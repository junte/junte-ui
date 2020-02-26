import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ResponsiveModule,
  ArrayPipeModule,
  FormModule,
  GridModule,
  LinkModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { GridTestComponent } from './grid-test.component';

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
    ResponsiveModule,
    ArrayPipeModule,
    SharedModule
  ],
  exports: [
    GridTestComponent
  ],
  declarations: [
    GridTestComponent
  ],
})
export class GridTestModule {
}
