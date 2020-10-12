import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    CheckboxModule,
    FormModule,
    GridModule,
    IconModule,
    LabelModule,
    LinkModule,
    SelectModule,
    StackModule,
    TabsModule,
    DotModule,
    AppLayoutModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { LabelTestComponent } from './label-test.component';

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
        IconModule,
        SelectModule,
        LabelModule,
        CheckboxModule,
        SharedModule,
        DotModule,
        AppLayoutModule
    ],
  exports: [
    LabelTestComponent
  ],
  declarations: [
    LabelTestComponent
  ],
})
export class LabelTestModule {
}

