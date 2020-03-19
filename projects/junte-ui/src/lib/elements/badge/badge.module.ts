import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ColorPipeModule } from '../../core/pipes/color.pipe.module';
import { BadgeComponent } from './badge.component';

@NgModule({
  imports: [
    CommonModule,
    ColorPipeModule
  ],
  declarations: [
    BadgeComponent
  ],
  entryComponents: [
    BadgeComponent
  ],
  exports: [
    BadgeComponent
  ]
})
export class BadgeModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<BadgeModule> {
    return {
      ngModule: BadgeModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}