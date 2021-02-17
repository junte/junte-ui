import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HANDBOOK } from 'src/consts';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation-test.component.html'
})
export class NavigationTestComponent {

  section = HANDBOOK.navigation;

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
