import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DateFnsModule } from 'ngx-date-fns';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { ArrayPipeModule } from '../../../pipes/array.pipe.module';
import { DatePipeModule } from '../../../pipes/date.pipe.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { GanttLineComponent } from './gantt-line/gantt-line.component';
import { GanttComponent } from './gantt.component';

@NgModule({
  declarations: [
    GanttComponent,
    GanttLineComponent
  ],
  imports: [
    CommonModule,
    DatePipeModule,
    DateFnsModule,
    ArrayPipeModule,
    IconModule,
    SkeletonModule,
    ButtonModule
  ],
  exports: [
    GanttComponent,
    GanttLineComponent
  ]
})
export class GanttModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<GanttModule> {
    return {
      ngModule: GanttModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
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
