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
    SwitcherModule,
    CheckboxModule,
    CardModule,
    SkeletonModule,
    MenuModule,
    AvatarModule,
    ButtonModule,
    AppLayoutModule
} from 'junte-ui';
import { CardTestComponent } from './card-test.component';
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
        CardModule,
        SkeletonModule,
        MenuModule,
        AvatarModule,
        ResponsiveModule,
        ArrayPipesModule,
        SharedModule,
        ButtonModule,
        AppLayoutModule
    ],
  exports: [
    CardTestComponent
  ],
  declarations: [
    CardTestComponent
  ],
})
export class CardTestModule {
}
