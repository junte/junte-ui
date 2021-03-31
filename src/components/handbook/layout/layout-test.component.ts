import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HANDBOOK } from 'src/consts';

@Component({
  selector: 'app-layout',
  templateUrl: './layout-test.component.html'
})
export class LayoutTestComponent {

  section = HANDBOOK.layout;

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
