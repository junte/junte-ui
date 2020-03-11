import { ViewportScroller } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { UI } from '../../../core/enums/ui';

@Component({
  selector: 'jnt-lp-rewind',
  templateUrl: './lp-rewind.encapsulated.html'
})
export class LpRewindComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-rewind-host';

  ui = UI;
  interval: any;

  constructor(private scrollService: ViewportScroller) {
  }

  scroll(target, time = 200) {

    const speed = 20;
    let current = this.scrollService.getScrollPosition()[1];
    let step = (Math.abs(target - current) * speed) / time;
    step = step < 1 ? 1 : step;
    step = target > current ? step : -step;

    this.interval = setInterval(() => {
      let next = current + step;

      if ((step > 0 && next >= target) || (step < 0 && next <= target)) {
        next = target;
        clearInterval(this.interval);
        this.interval = null;
      }

      current = next;
      this.scrollService.scrollToPosition([0, next]);
    }, speed);
  }

  up() {
    const height = document.documentElement.clientHeight;
    const current = this.scrollService.getScrollPosition()[1];
    const target = (Math.ceil(current / height) - 1) * height;
    if (target >= 0 && target !== current && !this.interval) {
      this.scroll(target);
    }
  }

  down() {
    const height = document.documentElement.clientHeight;
    const current = this.scrollService.getScrollPosition()[1];
    const target = (Math.floor(current / height) + 1) * height;
    if (target < document.documentElement.offsetHeight && target !== current && !this.interval) {
      this.scroll(target);
    }
  }
}
