import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyApi } from '../../../decorators/api';
import { UI } from '../../../enums/ui';

@Component({
  selector: 'jnt-anchor',
  templateUrl: './anchor.encapsulated.html'
})
export class AnchorComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-anchor-host';

  @PropertyApi({
    description: 'Anchor hash in URL',
    type: 'string'
  })
  @Input()
  anchor: string;

  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigate([],
      {fragment: this.anchor})
      .then(_ => null);
  }

}
