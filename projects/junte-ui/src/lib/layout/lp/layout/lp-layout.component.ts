import { Component, ContentChildren, HostBinding, QueryList } from '@angular/core';
import { LpSlideComponent } from '../slide/lp-slide.component';

@Component({
    selector: 'jnt-lp-layout',
    templateUrl: './lp-layout.encapsulated.html'
})
export class LpLayoutComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-layout-host';

  @ContentChildren(LpSlideComponent)
  slides: QueryList<LpSlideComponent>;

}
