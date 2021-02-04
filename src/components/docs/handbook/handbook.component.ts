import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-components',
  templateUrl: './handbook.component.html',
  styleUrls: ['./handbook.component.scss']
})
export class HandbookComponent {

  ui = UI;
  localUi = LocalUI;
  handbook = HANDBOOK;

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
