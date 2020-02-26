import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { CollectionsModule } from './components/collections/collections.module';
import { DynamicModule } from './components/dynamic/dynamic.module';
import { ElementsModule } from './components/elements/elements.module';
import { UiFormsModule } from './components/forms/forms.module';
import { LayoutModule } from './components/layout/layout.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { OverlaysModule } from './components/overlays/overlays.module';
import { SharedModule } from './components/shared/shared.module';
import { I18nLoaderFactory, JunteUIModuleConfig } from './config';
import { AnimationPipeModule } from './pipes/animation.pipe.module';
import { ArrayPipeModule } from './pipes/array.pipe.module';
import { ColorPipeModule } from './pipes/color.pipe.module';
import { ConvertionPipeModule } from './pipes/convertion.pipe.module';
import { DatePipeModule } from './pipes/date.pipe.module';
import { TextPipeModule } from './pipes/text.pipe.module';
import { enUS as dfnsEnUS } from 'date-fns/locale';

@NgModule({
  exports: [
    SharedModule,

    LayoutModule,
    NavigationModule,
    ElementsModule,
    UiFormsModule,
    CollectionsModule,
    OverlaysModule,
    DynamicModule,

    AnimationPipeModule,
    ArrayPipeModule,
    ColorPipeModule,
    ConvertionPipeModule,
    DatePipeModule,
    TextPipeModule
  ]
})
export class JunteUiModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<JunteUiModule> {
    const fnsConfig = new DateFnsConfigurationService();
    const locale = config.locale || {};
    fnsConfig.setLocale(locale.dfns || dfnsEnUS);
    return {
      ngModule: JunteUiModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        },
        {
          provide: DateFnsConfigurationService,
          useValue: fnsConfig
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
