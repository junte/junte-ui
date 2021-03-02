import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HANDBOOK } from 'src/consts';
import {UI} from 'junte-ui';

@Component({
  selector: 'app-components',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  ui = UI;
  handbook = HANDBOOK;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => 0;

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
