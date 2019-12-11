import { NgModule } from '@angular/core';
import { GanttModule } from './gantt/gantt.module';
import { SliderCarouselModule } from './slider/slider.module';
import { TableModule } from './table/table.module';

@NgModule({
  exports: [
    GanttModule,
    SliderCarouselModule,
    TableModule
  ]
})
export class CollectionsModule {
}
