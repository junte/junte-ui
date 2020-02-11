import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnimatedIconModule } from './animated/animated-icon.module';
import { FontIconModule } from './font/font-icon.module';
import { IconComponent } from './icon.component';
import { SvgIconModule } from './svg/svg-icon.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontIconModule,
    AnimatedIconModule,
    SvgIconModule
  ],
  declarations: [
    IconComponent
  ],
  entryComponents: [
    IconComponent
  ],
  exports: [
    IconComponent,
    FontIconModule,
    AnimatedIconModule,
    SvgIconModule
  ]
})
export class IconModule {
}
