import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { enUS as dfnsEnUS } from 'date-fns/locale';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { CollectionsModule } from './collections/collections.module';
import { I18nLoaderFactory, JunteUIModuleConfig } from './config';
import { AnimationPipesModule } from './core/pipes/animation-pipes.module';
import { ArrayPipesModule } from './core/pipes/array-pipes.module';
import { ColorPipesModule } from './core/pipes/color-pipes.module';
import { DatePipesModule } from './core/pipes/date-pipes.module';
import { TextPipesModule } from './core/pipes/text-pipes.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { ElementsModule } from './elements/elements.module';
import { UiFormsModule } from './forms/forms.module';
import { LayoutModule } from './layout/layout.module';
import { NavigationModule } from './navigation/navigation.module';
import { OverlaysModule } from './overlays/overlays.module';
import { SharedModule } from './shared/shared.module';

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

    AnimationPipesModule,
    ArrayPipesModule,
    ColorPipesModule,
    DatePipesModule,
    TextPipesModule
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
