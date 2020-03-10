import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  BlockModule,
  CheckboxModule,
  FormModule,
  GridModule,
  LinkModule,
  MenuModule,
  SelectModule,
  StackModule,
  TableModule,
  TabsModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { TableDataComponent } from './data/table-data.component';
import { TableTestComponent } from './table-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    BlockModule.forRoot(JUNTE_UI_CONFIG),
    TableModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule,
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    CheckboxModule.forRoot(JUNTE_UI_CONFIG),
    MenuModule.forRoot(JUNTE_UI_CONFIG)
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

