import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ArrayPipesModule,
  BlockModule, ButtonModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  MenuModule,
  SelectModule,
  StackModule,
  TableModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { TableDataComponent } from './data/table-data.component';
import { TableTestComponent } from './table-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    BlockModule,
    TableModule,
    SelectModule,
    CheckboxModule,
    MenuModule,
    SharedModule,
    ArrayPipesModule,
    AppLayoutModule,
    ButtonModule
  ],
  exports: [
    TableTestComponent
  ],
  declarations: [
    TableTestComponent,
    TableDataComponent
  ],
})
export class TableTestModule {
}

