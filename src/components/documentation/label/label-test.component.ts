import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-label-test',
  templateUrl: './label-test.component.html',
  styleUrls: ['./label-test.component.scss']
})
export class LabelTestComponent implements OnInit {

  ui = UI;

  constructor() {
  }

  ngOnInit() {
  }

}
