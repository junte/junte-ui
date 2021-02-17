import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule, GridModule, IconModule, LabelModule, StackModule } from 'junte-ui';
import { SectionComponent } from './section.component';

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    CommonModule,
    StackModule,
    CardModule,
    GridModule,
    IconModule,
    LabelModule
  ],
  exports: [
    SectionComponent
  ]
})
export class SectionModule {
}
