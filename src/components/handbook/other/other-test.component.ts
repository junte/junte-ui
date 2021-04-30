import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HANDBOOK } from 'src/consts';

@Component({
  selector: 'app-other',
  templateUrl: './other-test.component.html'
})
export class OtherTestComponent {

  section = HANDBOOK.other;

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
