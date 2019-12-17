import { Component } from '@angular/core';
import { ColComponent, ContainerComponent, RowComponent, UI } from 'junte-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-grid-test',
  templateUrl: './grid-test.component.html',
  styleUrls: ['./grid-test.component.scss']
})
export class GridTestComponent {

  ui = UI;
  localUi = LocalUI;
  container = ContainerComponent;
  row = RowComponent;
  col = ColComponent;

  columns = new FormControl(6);
  align = new FormControl(UI.flex.align.start);
  justify = new FormControl(UI.flex.justify.start);
  wrap = new FormControl(UI.flex.wrap.noWrap);
  direction = new FormControl(UI.flex.direction.row);
  alignContent = new FormControl(UI.flex.alignContent.start);
  span = new FormControl(6);


  gridBuilder = this.fb.group({
    columns: this.columns,
    align: this.align,
    justify: this.justify,
    wrap: this.wrap,
    direction: this.direction,
    alignContent: this.alignContent,
    span: this.span
  });

  constructor(private fb: FormBuilder) {
  }
}
