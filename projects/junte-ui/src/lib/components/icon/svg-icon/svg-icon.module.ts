import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CacheService } from '../../../services';
import { SvgIconComponent } from './svg-icon.component';

@NgModule({
  declarations: [
    SvgIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgIconComponent
  ],
  providers: [
    CacheService
  ]
})
export class SvgIconModule {
}
