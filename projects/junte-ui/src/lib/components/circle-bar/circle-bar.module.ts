import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleBarComponent } from './circle-bar.component';
import { BarIndicatorComponent } from './indicator/indicator.component';
import { BarIndicatorGroupComponent } from './indicator-group/indicator-group.component';
import { SumPipeModule } from '../../pipes/sum-pipe.module';
import { SanitizePipeModule } from '../../pipes/sanitize.module';

@NgModule({
  imports: [
    CommonModule,
    SumPipeModule,
    SanitizePipeModule
  ],
  declarations: [
    CircleBarComponent,
    BarIndicatorComponent,
    BarIndicatorGroupComponent
  ],
  exports: [
    CircleBarComponent,
    BarIndicatorComponent,
    BarIndicatorGroupComponent
  ]
})
export class CircleBarModule {
}
