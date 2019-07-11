import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightenDarkenPipe } from './color.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [LightenDarkenPipe],
  declarations: [LightenDarkenPipe]
})

export class ColorPipeModule {
}
