import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grid-test',
  templateUrl: './grid-test.component.html',
  styleUrls: ['./grid-test.component.scss']
})
export class GridTestComponent {
  ui = UI;

  grig = GridTestComponent;

  directions: any[] = [
    {value: UI.flex.direction.row, label: UI.flex.direction.row},
    {value: UI.flex.direction.rowReverse, label: UI.flex.direction.rowReverse},
    {value: UI.flex.direction.column, label: UI.flex.direction.column},
    {value: UI.flex.direction.columnReverse, label: UI.flex.direction.columnReverse}
  ];

  alignsContent: any[] = [
    {value: UI.flex.alignContent.start, label: UI.flex.alignContent.start},
    {value: UI.flex.alignContent.end, label: UI.flex.alignContent.end},
    {value: UI.flex.alignContent.around, label: UI.flex.alignContent.around},
    {value: UI.flex.alignContent.between, label: UI.flex.alignContent.between},
    {value: UI.flex.alignContent.evenly, label: UI.flex.alignContent.evenly},
    {value: UI.flex.alignContent.center, label: UI.flex.alignContent.center},
    {value: UI.flex.alignContent.stretch, label: UI.flex.alignContent.stretch}
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

  columnsControl = new FormControl(6);
  alignControl = new FormControl(UI.flex.align.start);
  justifyControl = new FormControl(UI.flex.justify.start);
  wrapControl = new FormControl(UI.flex.wrap.wrap);
  directionControl = new FormControl(UI.flex.direction.row);
  alignContentControl = new FormControl(UI.flex.alignContent.start);
  spanControl = new FormControl(6);


  gridBuilder = this.fb.group({
    columns: this.columnsControl,
    align: this.alignControl,
    justify: this.justifyControl,
    wrap: this.wrapControl,
    direction: this.directionControl,
    alignContent: this.alignContentControl,
    span: this.spanControl
  });

  constructor(private fb: FormBuilder) {
  }
}
