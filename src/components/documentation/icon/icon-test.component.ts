import { Component, OnInit } from '@angular/core';
import { AnimatedIcons, FontDefaultIcons, FontGesturesIcons, FontIcons, SvgIcons, UI } from '../../../../projects/junte-ui/src/lib/enum/ui';

class IconTest {
  constructor(public name: string,
              public value: FontIcons | SvgIcons | AnimatedIcons,
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

  fontDefault: IconTest[] = [];
  fontGestures: IconTest[] = [];
  animated: IconTest[] = [];
  svgDefault: IconTest[] = [];
  svgFlags: IconTest[] = [];

  ngOnInit() {
    this.fontDefault = Object.keys(FontDefaultIcons)
      .map(icon => new IconTest(icon, FontDefaultIcons[icon], 'junte-ui-icons-default'));

    this.fontGestures = Object.keys(FontGesturesIcons)
      .map(icon => new IconTest(icon, FontGesturesIcons[icon], 'junte-ui-icons-gestures'));

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
