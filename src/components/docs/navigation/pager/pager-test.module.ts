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
  PagerModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { PagerTestComponent } from './pager-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    SwitcherModule.forRoot(JUNTE_UI_CONFIG),
    PagerModule.forRoot(JUNTE_UI_CONFIG),
    BlockModule.forRoot(JUNTE_UI_CONFIG),
    ArrayPipesModule,
    SharedModule
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
