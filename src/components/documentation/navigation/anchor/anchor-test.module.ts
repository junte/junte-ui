import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkModule, StackModule, TabsModule, GridModule, FormModule, AccordionModule, AnchorModule } from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { AnchorTestComponent } from './anchor-test.component';

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
    AnchorModule,
    SharedModule
  ],
  exports: [
    AnchorTestComponent
  ],
  declarations: [
    AnchorTestComponent
  ],
})
export class AnchorTestModule {
}




