import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StackModule } from '../../layout/stack/stack.module';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { LinkComponent } from './link.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';


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
