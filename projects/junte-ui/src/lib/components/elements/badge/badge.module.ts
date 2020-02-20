import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ColorPipesModule } from '../../../pipes/color-pipes.module';
import { BadgeComponent } from './badge.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    ColorPipesModule
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
