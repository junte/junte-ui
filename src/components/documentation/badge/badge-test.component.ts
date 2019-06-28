import {Component, OnInit} from '@angular/core';
import {UI} from 'junte-ui';

@Component({
  selector: 'app-badge-test',
  templateUrl: './badge-test.component.html',
  styleUrls: ['./badge-test.component.scss']
})
export class BadgeTestComponent implements OnInit {

  ui = UI;

  constructor() {
  }

  ngOnInit() {
  }

}
