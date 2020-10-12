import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    IconModule,
    AccordionModule,
    BlockModule,
    ButtonModule,
    ChartModule,
    FormModule,
    GridModule,
    InputModule,
    LabelModule,
    LinkModule,
    StackModule,
    TabsModule,
    CheckboxModule,
    AvatarModule,
    AppLayoutModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { ChartTestComponent } from './chart-test.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IconModule,
        LinkModule,
        StackModule,
        TabsModule,
        GridModule,
        AccordionModule,
        FormModule,
        ChartModule,
        BlockModule,
        LabelModule,
        ButtonModule,
        InputModule,
        CheckboxModule,
        AvatarModule,
        SharedModule,
        AppLayoutModule,
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

