import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaQueryDirective } from './media-query';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MediaQueryDirective
  ],
  exports: [
    MediaQueryDirective
  ]
})
export class MediaQueryDirectiveModule {
}
