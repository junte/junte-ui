import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';

class ShowIcon {
  constructor(public name: string, public value: string, public iconset?: string) {
  }
}

@Component({
  selector: 'app-icon-test',
  templateUrl: './icon-test.component.html',
  styleUrls: ['./icon-test.component.scss']
})
export class IconTestComponent implements OnInit {

  ui = UI;

  icons: ShowIcon[] = [];
  animated: ShowIcon[] = [];
  svg: ShowIcon[] = [];

  ngOnInit() {
    this.icons = Object.keys(UI.icons.font)
      .map(icon => new ShowIcon(icon, UI.icons.font[icon]));

    this.animated = Object.keys(UI.icons.animated)
      .map(icon => new ShowIcon(icon, UI.icons.animated[icon]));

    this.svg.push(new ShowIcon('question', 'question', 'standard'))
  }

}
