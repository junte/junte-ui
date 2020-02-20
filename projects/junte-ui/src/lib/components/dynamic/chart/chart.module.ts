import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ColorPipesModule } from '../../../pipes/color-pipes.module';
import { ConvertionPipeModule } from '../../../pipes/convertion-pipe.module';
import { IsEqualPipeModule } from '../../../pipes/is-equal.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';
import { ChartComponent } from './chart.component';
import { SumIndicatorsPipe } from './sum-indicator.pipe';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    ConvertionPipeModule,
    ColorPipesModule,
    IsEqualPipeModule,
    IconModule
  ],
  exports: [
    ChartComponent,
    ChartIndicatorComponent
  ],
  declarations: [
    ChartComponent,
    ChartIndicatorComponent,
    SumIndicatorsPipe
  ]
})
export class ChartModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ChartModule> {
    return {
      ngModule: ChartModule,
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
