import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-typography-test',
  templateUrl: './typography-test.component.html',
  styleUrls: ['./typography-test.component.scss']
})
export class TypographyTestComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  constructor() { }

  ngOnInit() {
  }

}
