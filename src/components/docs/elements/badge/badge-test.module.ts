import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    BadgeModule,
    FormModule,
    GridModule,
    IconModule,
    LinkModule,
    SelectModule,
    StackModule,
    SwitcherModule,
    TabsModule,
    DotModule,
    CheckboxModule,
    AppLayoutModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { BadgeTestComponent } from './badge-test.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LinkModule,
        StackModule,
        TabsModule,
        GridModule,
        BadgeModule,
        FormModule,
        AccordionModule,
        SelectModule,
        IconModule,
        SwitcherModule,
        CheckboxModule,
        SharedModule,
        DotModule,
        AppLayoutModule
    ],
  exports: [
    BadgeTestComponent
  ],
  declarations: [
    BadgeTestComponent
  ],
})
export class BadgeTestModule {
}

