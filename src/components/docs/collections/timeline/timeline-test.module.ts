import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, FormModule, GridModule, IconModule, StackModule, TabsModule, TimelineModule } from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { TimelineTestComponent } from './timeline-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    StackModule,
    TabsModule,
    GridModule,
    AccordionModule,
    FormModule,
    TimelineModule,
    SharedModule,
  ],
  exports: [
    TimelineTestComponent
  ],
  declarations: [
    TimelineTestComponent
  ],
})
export class TimelineTestModule {
}

