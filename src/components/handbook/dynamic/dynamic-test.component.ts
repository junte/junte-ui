import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HANDBOOK } from 'src/consts';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic-test.component.html'
})
export class DynamicTestComponent {

  section = HANDBOOK.dynamic_data;

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
