import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    AppLayoutModule,
    ArrayPipesModule,
    FormModule,
    GridModule,
    IconModule,
    LinkModule,
    ResponsiveModule,
    SelectModule,
    StackModule,
    TabsModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { GridTestComponent } from './grid-test.component';

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
        GridModule,
        ResponsiveModule,
        ArrayPipesModule,
        SharedModule,
        AppLayoutModule
    ],
  exports: [
    GridTestComponent
  ],
  declarations: [
    GridTestComponent
  ],
})
export class GridTestModule {
}
