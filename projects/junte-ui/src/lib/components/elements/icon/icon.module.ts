import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AnimatedIconComponent } from './animated/animated-icon.component';
import { FontIconComponent } from './font/font-icon.component';
import { IconComponent } from './icon.component';
import { SvgIconComponent } from './svg/svg-icon.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

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
