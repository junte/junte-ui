import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    ArrayPipesModule,
    FormModule,
    GridModule,
    IconModule,
    LinkModule,
    ResponsiveModule,
    SelectModule,
    StackModule,
    TabsModule,
    CollapsibleModule,
    SwitcherModule,
    CheckboxModule,
    AppLayoutModule
} from 'junte-ui';
import { CollapsibleTestComponent } from './collapsible-test.component';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';

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
        SelectModule,
        SwitcherModule,
        CheckboxModule,
        CollapsibleModule,
        ResponsiveModule,
        ArrayPipesModule,
        SharedModule,
        AppLayoutModule
    ],
  exports: [
    CollapsibleTestComponent
  ],
  declarations: [
    CollapsibleTestComponent
  ],
})
export class CollapsibleTestModule {
}
