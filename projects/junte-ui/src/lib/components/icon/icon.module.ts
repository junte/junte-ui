import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimatedIconModule } from './animated-icon/animated-icon.module';
import { FontIconModule } from './font-icon/font-icon.module';
import { IconComponent } from './icon.component';
import { SvgIconModule } from './svg-icon/svg-icon.module';

@NgModule({
  imports: [
    CommonModule,
    FontIconModule,
    AnimatedIconModule,
    SvgIconModule
  ],
  declarations: [
    IconComponent
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule {
}
