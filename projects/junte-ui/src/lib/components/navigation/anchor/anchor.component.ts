import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UI } from 'projects/junte-ui/src/lib/enums/ui';

@Component({
  selector: 'jnt-anchor',
  templateUrl: './anchor.encapsulated.html'
})
export class AnchorComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-anchor-host';

  @Input() anchor: string;

  constructor(public router: Router) {
  }

  nav() {
    this.router.navigate([], {fragment: this.anchor});
  }

}
