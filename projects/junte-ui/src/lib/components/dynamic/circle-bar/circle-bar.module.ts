import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SanitizePipeModule } from '../../../pipes/sanitize.module';
import { CircleBarComponent } from './circle-bar.component';
import { BarIndicatorGroupComponent } from './indicator-group/indicator-group.component';
import { BarIndicatorComponent } from './indicator/indicator.component';
import { SumPipe } from './pipes';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    SanitizePipeModule
  ],
  declarations: [
    CircleBarComponent,
    BarIndicatorComponent,
    BarIndicatorGroupComponent,
    SumPipe
  ],
  entryComponents: [
    CircleBarComponent,
    BarIndicatorComponent
  ],
  exports: [
    CircleBarComponent,
    BarIndicatorComponent,
    BarIndicatorGroupComponent,
    SumPipe
  ]
})
export class CircleBarModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CircleBarModule> {
    return {
      ngModule: CircleBarModule,
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
