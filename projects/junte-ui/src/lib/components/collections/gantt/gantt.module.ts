import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DateFnsModule } from 'ngx-date-fns';
import { ArrayPipeModule } from '../../../pipes/array-pipe.module';
import { DatePipeModule } from '../../../pipes/date-pipe.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { GanttLineComponent } from './gantt-line/gantt-line.component';
import { GanttComponent } from './gantt.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

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
