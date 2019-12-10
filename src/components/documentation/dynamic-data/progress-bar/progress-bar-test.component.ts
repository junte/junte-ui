import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-progress-bar-test',
  templateUrl: './progress-bar-test.component.html',
  styleUrls: ['./progress-bar-test.component.scss']
})
export class ProgressBarTestComponent implements OnInit {

  ui = UI;
  math = Math;

  constructor() {
  }

  ngOnInit() {
  }

}
