import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DotModule } from '../dot/dot.module';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../icon/icon.module';
import { AvatarComponent } from './avatar.component';
import { AvatarsGroupComponent } from './avatars-group/avatars-group.component';
import { AvatarsListComponent } from './avatars-list/avatars-list.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    DotModule
  ],
  declarations: [
    AvatarComponent,
    AvatarsGroupComponent,
    AvatarsListComponent
  ],
  entryComponents: [
    AvatarComponent,
    AvatarsGroupComponent,
    AvatarsListComponent
  ],
  exports: [
    AvatarComponent,
    AvatarsGroupComponent,
    AvatarsListComponent
  ]
})
export class AvatarModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<AvatarModule> {
    return {
      ngModule: AvatarModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
