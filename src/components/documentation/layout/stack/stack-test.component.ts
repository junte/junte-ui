import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { StackComponent, UI } from 'junte-ui';
import {LocalUI} from 'src/enums/local-ui';

@Component({
  selector: 'app-stack-test',
  templateUrl: './stack-test.component.html',
  styleUrls: ['./stack-test.component.scss']
})
export class StackTestComponent {

  ui = UI;
  localUi = LocalUI;
  stack = StackComponent;

  _type = UI.stack.type.vertical;

  type = new FormControl(this._type);
  gutter = new FormControl(UI.gutter.normal);
  align = new FormControl(UI.flex.align.start);
  justify = new FormControl(UI.flex.justify.start);
  wrap = new FormControl(UI.flex.wrap.noWrap);

  form = this.fb.group({
    type: this.type,
    gutter: this.gutter,
    align: this.align,
    justify: this.justify,
    wrap: this.wrap
  });

  constructor(private fb: FormBuilder) {
  }

}
