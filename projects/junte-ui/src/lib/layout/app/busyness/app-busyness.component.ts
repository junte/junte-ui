import { Component, HostBinding } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { UI } from '../../../core/enums/ui';

@Component({
  selector: 'jnt-app-busyness',
  templateUrl: './app-busyness.encapsulated.html'
})
export class AppBusynessComponent {

  ui = UI;
  @HostBinding('attr.host') readonly host = 'jnt-app-busyness-host';

  loading = false;

  @HostBinding('style.display')
  get style() {
    return !!this.loading ? 'none' : 'flex';
  }

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }

      if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }
}
