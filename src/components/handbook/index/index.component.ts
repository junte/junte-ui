import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HANDBOOK } from 'src/consts';

@Component({
  selector: 'app-components',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  handbook = HANDBOOK;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  };

  constructor(public router: Router,
              public route: ActivatedRoute) {
  }
}
