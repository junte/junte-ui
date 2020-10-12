import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    AccordionModule,
    BlockModule,
    CheckboxModule,
    FormModule,
    GridModule,
    IconModule,
    LinkModule,
    SelectModule,
    SkeletonModule,
    StackModule,
    TabsModule,
    ArrayPipesModule,
    AppLayoutModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { SkeletonTestComponent } from './skeleton-test.component';

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
        SkeletonModule,
        BlockModule,
        CheckboxModule,
        SharedModule,
        ArrayPipesModule,
        AppLayoutModule
    ],
  exports: [
    SkeletonTestComponent
  ],
  declarations: [
    SkeletonTestComponent
  ],
})
export class SkeletonTestModule {
}
