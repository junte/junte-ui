import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperDirective } from './carousel.directive';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { StackModule } from '../../layout/stack/stack.module';
import { CarouselComponent } from './carousel.component';
import { CarouselItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    ArrayPipesModule,
    StackModule
  ],
  exports: [
    CarouselComponent,
    CarouselItemComponent
  ],
  entryComponents: [
    CarouselComponent
  ],
  declarations: [
    CarouselComponent,
    CarouselItemComponent,
    SwiperDirective
  ]
})
export class CarouselModule {
}
