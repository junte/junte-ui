import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { IconModule } from '../icon/icon.module';
import { AvatarComponent } from './avatar.component';
import { AvatarsGroupComponent } from './avatars-group/avatars-group.component';
import { AvatarsListComponent } from './avatars-list/avatars-list.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
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
        },
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: I18nLoaderFactory,
            deps: [JunteUIModuleConfig]
          },
          defaultLanguage: 'en'
        }).providers
      ]
    };
  }

}
