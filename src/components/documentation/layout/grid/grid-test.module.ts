import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkModule, StackModule, TabsModule, GridModule, FormModule, AccordionModule, SelectModule } from 'junte-ui';
import { ArrayPipeModule } from 'projects/junte-ui/src/lib/pipes/array-pipe.module';
import { SharedModule } from '../../shared/shared.module';
import { GridTestComponent } from './grid-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    SelectModule,
    GridModule,
    ArrayPipeModule,
    SharedModule
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
