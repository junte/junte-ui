import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../config';
import { GanttModule } from './gantt/gantt.module';
import { TableModule } from './table/table.module';
import { TimelineModule } from './timeline/timeline.module';

@NgModule({
  exports: [
    GanttModule,
    TableModule,
    TimelineModule
  ]
})
export class CollectionsModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CollectionsModule> {
    return {
      ngModule: CollectionsModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
