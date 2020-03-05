import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../../config';
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

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<IconModule> {
    return {
      ngModule: IconModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
