import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';

class IconTest {
  constructor(public name: string,
              public value: string,
              public iconset = 'default') {
  }
}

@Component({
  selector: 'app-icon-test',
  templateUrl: './icon-test.component.html',
  styleUrls: ['./icon-test.component.scss']
})
export class IconTestComponent implements OnInit {

  ui = UI;

  icons: IconTest[] = [];
  animated: IconTest[] = [];
  svgDefault: IconTest[] = [];
  svgFlags: IconTest[] = [];

  ngOnInit() {
    this.icons = Object.keys(UI.icons.font)
      .map(icon => new IconTest(icon, UI.icons.font[icon]));

    this.svgDefault = Object.keys(UI.icons.svg.default)
      .map(icon => new IconTest(icon, UI.icons.svg.default[icon]));

    this.svgFlags = Object.keys(UI.icons.svg.flags)
      .map(icon => new IconTest(icon, UI.icons.svg.flags[icon], 'flags'));

    this.animated = Object.keys(UI.icons.animated)
      .map(icon => new IconTest(icon, UI.icons.animated[icon]));
  }

  refresh() {
    this.animated = Object.keys(UI.icons.animated)
      .map(icon => new IconTest(icon, UI.icons.animated[icon]));
  }
}
