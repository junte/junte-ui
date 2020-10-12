import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    IconModule,
    DotModule,
    FormModule,
    GridModule,
    LinkModule,
    StackModule,
    TabsModule,
    SelectModule,
    AppLayoutModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
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
        AppLayoutModule
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

