import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { LinkComponent } from './link.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    BadgeModule,
    StackModule
  ],
  exports: [
    LinkComponent
  ],
  entryComponents: [
    LinkComponent
  ],
  declarations: [
    LinkComponent
  ]
})
export class LinkModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<LinkModule> {
    return {
      ngModule: LinkModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
