import {Component, OnInit} from '@angular/core';
import {UI} from 'junte-ui';

@Component({
  selector: 'app-icon-test',
  templateUrl: './icon-test.component.html',
  styleUrls: ['./icon-test.component.scss']
})
export class IconTestComponent implements OnInit {

  ui = UI;

  icons: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.icons = Object.keys(UI.icons).map(icon => {
      return {
        name: icon,
        value: UI.icons[icon]
      };
    });
  }

}
