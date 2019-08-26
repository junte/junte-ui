import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-link-test',
  templateUrl: './link-test.component.html',
  styleUrls: ['./link-test.component.scss']
})
export class LinkTestComponent implements OnInit {
  example = `
    <jnt-link [source]="['/components', 'block']">Link</jnt-link>
  `;

  ui = UI;

  constructor() {
  }

  ngOnInit() {
  }

}
