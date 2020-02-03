import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {
  AnimatedIcons,
  FontDefaultIcons,
  FontEmojiIcons,
  FontIcons,
  SvgDefaultIcons,
  SvgFlagsIcons,
  UI
} from 'junte-ui';
import { TabComponent, IconComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

class IconTest {
  constructor(public name: string,
              public value: FontIcons | AnimatedIcons,
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
  localUi = LocalUI;
  icon = IconComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  fontDefault: IconTest[] = [];
  fontGestures: IconTest[] = [];
  fontEmoji: IconTest [] = [];
  animated: IconTest[] = [];
  svgDefault: IconTest[] = [];
  svgFlags: IconTest[] = [];

  sizeControl = new FormControl(UI.size.normal);

  form = this.fb.group({
    size: this.sizeControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.fontDefault = Object.keys(FontDefaultIcons)
      .map(icon => new IconTest(icon, FontDefaultIcons[icon], 'junte-ui-icons-default'));

    this.fontGestures = Object.keys(UI.icons.gestures)
      .map(icon => new IconTest(icon, UI.icons.gestures[icon], 'junte-ui-icons-gestures'));

    Object.keys(UI.icons.gestures)
      .map(icon => console.log(UI.icons.gestures[icon]));

    this.fontEmoji = Object.keys(FontEmojiIcons)
      .map(icon => new IconTest(icon, FontEmojiIcons[icon], 'junte-ui-icons-emoji'));

    this.svgDefault = Object.keys(SvgDefaultIcons)
      .map(icon => new IconTest(icon, SvgDefaultIcons[icon]));

    this.svgFlags = Object.keys(SvgFlagsIcons)
      .map(icon => new IconTest(icon, SvgFlagsIcons[icon], 'flags'));

    this.animated = Object.keys(AnimatedIcons)
      .map(icon => new IconTest(icon, AnimatedIcons[icon]));

    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }

  refresh() {
    this.animated = Object.keys(AnimatedIcons)
      .map(icon => new IconTest(icon, AnimatedIcons[icon]));
  }
}
