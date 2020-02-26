import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  AccordionModule,
  FormModule,
  BlockModule,
  TableModule,
  SelectModule,
  MenuModule,
  CheckboxModule
} from 'junte-ui';
import { TableDataComponent } from './data/table-data.component';
import { SharedModule } from '../../shared/shared.module';
import { TableTestComponent } from './table-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    BlockModule,
    TableModule,
    SharedModule,
    SelectModule,
    CheckboxModule,
    MenuModule
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

