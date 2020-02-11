import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnimatedIconComponent } from './animated/animated-icon.component';
import { FontIconComponent } from './font/font-icon.component';
import { IconComponent } from './icon.component';
import { SvgIconComponent } from './svg/svg-icon.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    IconComponent,
    FontIconComponent,
    AnimatedIconComponent,
    SvgIconComponent
  ],
  entryComponents: [
    IconComponent
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule {
}
