import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SanitizePipeModule } from '../../../pipes/sanitize.module';
import { CircleBarComponent } from './circle-bar.component';
import { BarIndicatorGroupComponent } from './indicator-group/indicator-group.component';
import { BarIndicatorComponent } from './indicator/indicator.component';
import { SumPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    SanitizePipeModule
  ],
  declarations: [
    CircleBarComponent,
    BarIndicatorComponent,
    BarIndicatorGroupComponent,
    SumPipe
  ],
  exports: [
    CircleBarComponent,
    BarIndicatorComponent,
    BarIndicatorGroupComponent,
    SumPipe
  ]
})
export class CircleBarModule {
}
