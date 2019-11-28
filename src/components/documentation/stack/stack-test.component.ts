import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stack-test',
  templateUrl: './stack-test.component.html',
  styleUrls: ['./stack-test.component.scss']
})
export class StackTestComponent {
  ui = UI;

  types: any[] = [
    {value: UI.stack.type.horizontal, label: UI.stack.type.horizontal},
    {value: UI.stack.type.vertical, label: UI.stack.type.vertical}
  ];

  gutters: any[] = [
    {value: UI.gutter.tiny, label: UI.gutter.tiny},
    {value: UI.gutter.small, label: UI.gutter.small},
    {value: UI.gutter.normal, label: UI.gutter.normal},
    {value: UI.gutter.big, label: UI.gutter.big},
    {value: UI.gutter.large, label: UI.gutter.large},
    {value: UI.gutter.huge, label: UI.gutter.huge}
  ];

  aligns: any[] = [
    {value: UI.flex.align.start, label: UI.flex.align.start},
    {value: UI.flex.align.end, label: UI.flex.align.end},
    {value: UI.flex.align.stretch, label: UI.flex.align.stretch},
    {value: UI.flex.align.baseline, label: UI.flex.align.baseline},
    {value: UI.flex.align.center, label: UI.flex.align.center}
  ];

  justifys: any[] = [
    {value: UI.flex.justify.start, label: UI.flex.justify.start},
    {value: UI.flex.justify.end, label: UI.flex.justify.end},
    {value: UI.flex.justify.around, label: UI.flex.justify.around},
    {value: UI.flex.justify.between, label: UI.flex.justify.between},
    {value: UI.flex.justify.evenly, label: UI.flex.justify.evenly},
    {value: UI.flex.justify.center, label: UI.flex.justify.center},
  ];

  wraps: any[] = [
    {value: UI.flex.wrap.wrap, label: UI.flex.wrap.wrap},
    {value: UI.flex.wrap.noWrap, label: UI.flex.wrap.noWrap},
    {value: UI.flex.wrap.reverse, label: UI.flex.wrap.reverse}
  ];

  typeControl = new FormControl(UI.stack.type.vertical);
  gutterControl = new FormControl(UI.gutter.normal);
  alignControl = new FormControl(UI.flex.align.start);
  justifyControl = new FormControl(UI.flex.justify.start);
  wrapControl = new FormControl(UI.flex.wrap.noWrap);

  stackBuilder = this.fb.group({
    type: this.typeControl,
    gutter: this.gutterControl,
    align: this.alignControl,
    justify: this.justifyControl,
    wrap: this.wrapControl
  });

  constructor(private fb: FormBuilder) {
  }
}
