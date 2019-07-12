import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleBarComponent } from './circle-bar.component';
import { BarIndicatorComponent } from './indicator/indicator.component';
import { BarIndicatorGroupComponent } from './indicator-group/indicator-group.component';
import { SumPipe } from './pipes';
import {SanitizePipeModule} from '../../pipes/sanitize.module';

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
