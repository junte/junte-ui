import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { LpHeaderComponent } from '../header/lp-header.component';
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

  @PropertyApi({
    description: 'Link to LP header',
    type: 'LpHeaderComponent'
  })
  @Input() header: LpHeaderComponent;

  @HostBinding('attr.data-with-header')
  get withHeader() {
    return !!this.header;
  }

  @HostListener('window:resize')
  sizeChange() {
    this.slideHeight = document.documentElement.clientHeight;
  }

}
