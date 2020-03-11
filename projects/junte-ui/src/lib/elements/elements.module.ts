import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../config';
import { AvatarModule } from './avatar/avatar.module';
import { BadgeModule } from './badge/badge.module';
import { IconModule } from './icon/icon.module';
import { LabelModule } from './label/label.module';

@NgModule({
  exports: [
    AvatarModule,
    BadgeModule,
    IconModule,
    LabelModule
  ]
})
export class ElementsModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ElementsModule> {
    return {
      ngModule: ElementsModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
