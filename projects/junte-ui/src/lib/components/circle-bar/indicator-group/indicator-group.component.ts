import { AfterContentInit, Component, ContentChildren, HostBinding, Input, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { BarIndicatorComponent } from '../indicator/indicator.component';

@Component({
  selector: 'jnt-bar-indicator-group',
  templateUrl: './indicator-group.component.html'
})
export class BarIndicatorGroupComponent implements AfterContentInit {

  @HostBinding('attr.host') readonly host = 'jnt-bar-indicator-group-host';

  @HostBinding('style.height.px')
  get height() {
    return this.size;
  }

  @HostBinding('style.width.px')
  get width() {
    return this.size;
  }

  @ViewChildren('group')
  template: ViewContainerRef;

  @ContentChildren(BarIndicatorComponent)
  indicators: QueryList<BarIndicatorComponent>;

  @Input() size = 100;


  ngAfterContentInit() {
    console.log(this.indicators);
  }
}
