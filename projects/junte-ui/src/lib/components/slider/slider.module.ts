import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SliderCarouselArrowComponent } from './arrow/arrow.component';
import { SliderCarouselDotsComponent } from './dots/dots.component';
import { SliderCarouselItemComponent } from './item/item.component';
import { SliderCarouselComponent } from './slider.component';
import { SwiperDirective } from './swiper.directive';

@NgModule({
    declarations: [
        SliderCarouselComponent,
        SliderCarouselItemComponent,
        SliderCarouselDotsComponent,
        SliderCarouselArrowComponent,
        SwiperDirective
    ],
    imports: [
      CommonModule
    ],
    exports: [
      SliderCarouselComponent,
      SliderCarouselItemComponent
    ]
})

export class SliderCarouselModule {
}
