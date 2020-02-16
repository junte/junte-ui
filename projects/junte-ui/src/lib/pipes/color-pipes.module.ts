import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightenDarkenPipe, TextBrightnessPipe } from './color.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [
    LightenDarkenPipe,
    TextBrightnessPipe
  ],
  declarations: [
    LightenDarkenPipe,
    TextBrightnessPipe
  ]
})

export class ColorPipesModule {
}
