import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DateFnsModule } from 'ngx-date-fns';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { DatePipesModule } from '../../core/pipes/date-pipes.module';
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
    DatePipesModule,
    ArrayPipesModule,
    IconModule,
    SkeletonModule,
    ButtonModule,
    DateFnsModule
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
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
