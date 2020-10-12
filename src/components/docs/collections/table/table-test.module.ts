import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    IconModule,
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
    TabsModule,
    ArrayPipesModule,
    AppLayoutModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
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
        AppLayoutModule
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

