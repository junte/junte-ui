import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { CollectionsModule } from './collections/collections.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { ElementsModule } from './elements/elements.module';
import { UiFormsModule } from './forms/forms.module';
import { LayoutModule } from './layout/layout.module';
import { NavigationModule } from './navigation/navigation.module';
import { OverlaysModule } from './overlays/overlays.module';
import { SharedModule } from './shared/shared.module';
import { I18nLoaderFactory, JunteUIModuleConfig } from './config';
import { AnimationPipeModule } from './core/pipes/animation.pipe.module';
import { ArrayPipeModule } from './core/pipes/array.pipe.module';
import { ColorPipeModule } from './core/pipes/color.pipe.module';
import { ConvertionPipeModule } from './core/pipes/convertion.pipe.module';
import { DatePipeModule } from './core/pipes/date.pipe.module';
import { TextPipeModule } from './core/pipes/text.pipe.module';
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
