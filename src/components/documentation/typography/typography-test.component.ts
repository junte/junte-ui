import { Component, OnInit } from '@angular/core';
import { UI } from '../../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-typography-test',
  templateUrl: './typography-test.component.html',
  styleUrls: ['./typography-test.component.scss']
})
export class TypographyTestComponent implements OnInit {
  ui = UI;
  constructor() { }

  ngOnInit() {
  }

}
