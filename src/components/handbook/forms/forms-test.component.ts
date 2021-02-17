import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HANDBOOK } from 'src/consts';

@Component({
  selector: 'app-forms',
  templateUrl: './forms-test.component.html'
})
export class FormsTestComponent {

  section = HANDBOOK.forms;

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
