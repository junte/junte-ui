import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetPercentPipe } from './slider.pipes';
import { SliderComponent } from './slider.component';


@NgModule({
  declarations: [SliderComponent, GetPercentPipe],
  exports: [SliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SliderModule {
}
