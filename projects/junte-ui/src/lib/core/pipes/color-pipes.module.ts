import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LightenDarkenPipe } from './color/lighten-darken.pipe';
import { TextBrightnessPipe } from './color/text-brightness.pipe';

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
