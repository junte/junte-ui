import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-app-layout-test',
  templateUrl: './app-layout-test.component.html',
  styleUrls: ['./app-layout-test.component.scss']
})
export class AppLayoutTestComponent implements OnInit {
  ui = UI;

  constructor() {
  }

  ngOnInit() {
  }

}
