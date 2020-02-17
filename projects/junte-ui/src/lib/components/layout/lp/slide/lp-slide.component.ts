import { Component, ContentChild, HostBinding, HostListener, TemplateRef } from '@angular/core';

@Component({
  selector: 'jnt-lp-slide',
  templateUrl: './lp-slide.encapsulated.html'
})
export class LpSlideComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-slide-host';

  @HostBinding('style.height.px')
  height: number = document.documentElement.clientHeight;

  @ContentChild('slideContentTemplate', {static: false})
  slideContentTemplate: TemplateRef<any>;

  @HostListener('window:resize')
  sizeChange() {
    this.height = document.documentElement.clientHeight;
  }

}
