import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-dropdown-test',
  templateUrl: './dropdown-test.component.html',
  styleUrls: ['./dropdown-test.component.scss']
})
export class DropdownTestComponent implements OnInit {

  ui = UI;

  constructor() {
  }

  ngOnInit() {
  }

}
