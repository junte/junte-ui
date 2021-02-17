import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HANDBOOK } from 'src/consts';

@Component({
  selector: 'app-collections',
  templateUrl: './collections-test.component.html'
})
export class CollectionsTestComponent {

  section = HANDBOOK.collections;

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
