import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ArrayPipeModule,
  FormModule,
  IconModule,
  GridModule,
  LinkModule,
  ResponsiveModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { ResponsiveTestComponent } from 'src/components/docs/layout/responsive/responsive-test.component';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    ResponsiveModule,
    ArrayPipeModule,
    SharedModule
  ],
  exports: [
    ResponsiveTestComponent
  ],
  declarations: [
    ResponsiveTestComponent
  ],
})
export class ResponsiveTestModule {
}

