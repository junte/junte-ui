import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    AppLayoutModule,
    BadgeModule,
    CheckboxModule,
    FormModule,
    GridModule,
    IconModule,
    LinkModule,
    SelectModule,
    SkeletonModule,
    StackModule,
    TabsModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { TabsTestComponent } from './tabs-test.component';

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
        AccordionModule,
        BadgeModule,
        SkeletonModule,
        SelectModule,
        CheckboxModule,
        SharedModule,
        AppLayoutModule
    ],
  exports: [
    TabsTestComponent
  ],
  declarations: [
    TabsTestComponent
  ],
})
export class TabsTestModule {
}
