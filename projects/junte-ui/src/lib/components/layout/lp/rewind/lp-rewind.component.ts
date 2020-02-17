import { Component, HostBinding } from '@angular/core';
import { UI } from '../../../../enums/ui';

@Component({
  selector: 'jnt-lp-rewind',
  templateUrl: './lp-rewind.encapsulated.html'
})
export class LpRewindComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-rewind-host';

  ui = UI;

  getScrollDown() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    return currentScroll + document.documentElement.clientHeight;
  }

  getScrollUp() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    return currentScroll - document.documentElement.clientHeight;
  }

  scrollSmooth(targetScroll, ms = 500) {

    const getScroll = () => window.pageYOffset || document.documentElement.scrollTop;
    const currentScroll = getScroll();

    const frequency = 20;
    let step = (Math.abs(targetScroll - currentScroll) * frequency) / ms;
    if (step < 1) {
      step = 1;
    }
    step = targetScroll > currentScroll ? step : -step;

    if (targetScroll === currentScroll) {
      return;
    }

    const interval = setInterval(() => {
      const timeout = setTimeout(() => {
        let newScroll = getScroll() + step;
        const scrollingFinish = (step > 0 && newScroll >= targetScroll) ||
          (step < 0 && newScroll <= targetScroll);
        if (scrollingFinish) {
          newScroll = targetScroll;
          clearInterval(interval);
          clearTimeout(timeout);
        }

        window.scrollTo({top: newScroll});
      }, 0);

    }, frequency);
  }

}
