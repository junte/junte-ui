import { Component, ContentChild, HostBinding, HostListener, Input, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { Height } from '../../../core/enums/height';

@Component({
  selector: 'jnt-lp-slide',
  templateUrl: './lp-slide.encapsulated.html'
})
export class LpSlideComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-slide-host';

  @HostBinding('attr.data-height')
  _height = Height.screen;

  @HostBinding('style.height.px')
  slideHeight: number = document.documentElement.clientHeight;

  @PropertyApi({
    description: 'Slide height',
    path: 'ui.height',
    default: Height.screen,
    options: [Height.screen, Height.default]
  })
  @Input() set height(height: Height) {
    this._height = height || Height.screen;
  }

  get height() {
    return this._height;
  }

  @HostListener('window:resize')
  sizeChange() {
    this.slideHeight = document.documentElement.clientHeight;
  }

}
