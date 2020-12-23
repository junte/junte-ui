import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    AppLayoutModule, CheckboxModule,
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
        CheckboxModule
    ],
  exports: [
    DotTestComponent
  ],
  declarations: [
    DotTestComponent
  ],
})
export class DotTestModule {
}

