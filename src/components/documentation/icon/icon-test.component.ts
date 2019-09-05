import {Component, OnInit} from '@angular/core';
import {UI} from 'junte-ui';

class IconTest {
  constructor(public name: string,
              public value: string) {
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
  svg: IconTest[] = [];

  ngOnInit() {
    this.icons = Object.keys(UI.icons.font)
      .map(icon => new IconTest(icon, UI.icons.font[icon]));

    this.svg = Object.keys(UI.icons.svg)
      .map(icon => new IconTest(icon, UI.icons.svg[icon]));

    this.animated = Object.keys(UI.icons.animated)
      .map(icon => new IconTest(icon, UI.icons.animated[icon]));
  }

}
