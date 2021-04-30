import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HANDBOOK } from 'src/consts';

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays-test.component.html'
})
export class OverlaysTestComponent {

  section = HANDBOOK.overlays;

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
