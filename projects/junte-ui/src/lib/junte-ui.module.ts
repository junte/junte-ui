import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CollectionsModule } from './collections/collections.module';
import { JUNTE_DEFAULT_CONFIG, JunteUIConfig } from './config';
import { SelectableModule } from './core/directives/selectable';
import { ShortcutsModule } from './core/directives/shortcuts';
import { ArrayPipesModule } from './core/pipes/array-pipes.module';
import { ColorPipesModule } from './core/pipes/color-pipes.module';
import { TextPipesModule } from './core/pipes/text-pipes.module';
import deepMerge from './core/utils/merge';
import { DynamicModule } from './dynamic/dynamic.module';
import { ElementsModule } from './elements/elements.module';
import { FormsModule } from './forms/forms.module';
import { LayoutModule } from './layout/layout.module';
import { NavigationModule } from './navigation/navigation.module';
import { OverlaysModule } from './overlays/overlays.module';
import { SharedModule } from './shared/shared.module';

export let CONFIG_TOKEN = new InjectionToken('JunteUIModuleConfig');

export function configFactory(config: JunteUIConfig) {
  return deepMerge(JUNTE_DEFAULT_CONFIG, config);
}

@NgModule({
  exports: [
    SharedModule,

    LayoutModule,
    NavigationModule,
    ElementsModule,
    FormsModule,
    CollectionsModule,
    OverlaysModule,
    DynamicModule,
    ArrayPipesModule,
    ColorPipesModule,
    TextPipesModule,
    SelectableModule,
    ShortcutsModule
  ]
})
export class JunteUiModule {

  static forRoot(config: JunteUIConfig = {}): ModuleWithProviders<JunteUiModule> {
    return {
      ngModule: JunteUiModule,
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: config
        },
        {
          provide: JunteUIConfig,
          useFactory: configFactory,
          deps: [CONFIG_TOKEN]
        }
      ]
    };
  }
}
