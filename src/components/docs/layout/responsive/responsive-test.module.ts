import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ArrayPipesModule,
  FormModule,
  IconModule,
  GridModule,
  LinkModule,
  ResponsiveModule,
  SelectModule,
  StackModule,
  TabsModule,
  PopoverModule
} from 'junte-ui';
import { ResponsiveTestComponent } from 'src/components/docs/layout/responsive/responsive-test.component';
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
    PopoverModule,
    ResponsiveModule,
    ArrayPipesModule,
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

