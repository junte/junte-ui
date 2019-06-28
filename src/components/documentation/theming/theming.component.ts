import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.scss']
})
export class ThemingComponent implements OnInit {

  ui = UI;

  colors: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.colors = Object.keys(UI.colors).map(color => {
      return {
        name: color,
        value: UI.colors[color]
      };
    });
  }

}
