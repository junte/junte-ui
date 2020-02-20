import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import {
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  AccordionModule,
  FormModule,
  BlockModule,
  ChartModule,
  LabelModule,
  ButtonModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { ChartTestComponent } from './chart-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    ChartModule,
    BlockModule,
    SharedModule,
    PrismModule,
    LabelModule,
    ButtonModule
  ],
  exports: [
    ChartTestComponent
  ],
  declarations: [
    ChartTestComponent
  ],
})
export class ChartTestModule {
}

