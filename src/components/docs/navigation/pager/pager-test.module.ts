import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ArrayPipesModule,
  BlockModule,
  FormModule,
  GridModule,
  LinkModule,
  StackModule,
  SwitcherModule,
  TabsModule,
  PagerModule,
  IconModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { PagerTestComponent } from './pager-test.component';

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
        SwitcherModule,
        PagerModule,
        BlockModule,
        ArrayPipesModule,
        SharedModule,
        ArrayPipesModule
    ],
  exports: [
    PagerTestComponent
  ],
  declarations: [
    PagerTestComponent
  ],
})
export class PagerTestModule {
}
