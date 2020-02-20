import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IconModule } from '../icon/icon.module';
import { AvatarComponent } from './avatar.component';
import { AvatarsGroupComponent } from './avatars-group/avatars-group.component';
import { AvatarsListComponent } from './avatars-list/avatars-list.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

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
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: new I18nLoader(config.i18n || en)
          },
          defaultLanguage: 'en'
        }).providers]
    };
  }

}
