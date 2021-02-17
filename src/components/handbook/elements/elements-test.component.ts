import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HANDBOOK } from 'src/consts';

@Component({
  selector: 'app-elements',
  templateUrl: './elements-test.component.html'
})
export class ElementsTestComponent {

  section = HANDBOOK.elements;

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
