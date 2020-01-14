import { Component, OnInit, ViewChild } from '@angular/core';
import { ColComponent, ContainerComponent, RowComponent, UI } from 'junte-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { LocalUI } from 'src/enums/local-ui';
import { TabComponent } from '../../../../../projects/junte-ui/src/lib/components/navigation/tabs/tab/tab.component';

@Component({
  selector: 'app-grid-test',
  templateUrl: './grid-test.component.html',
  styleUrls: ['./grid-test.component.scss']
})
export class GridTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  container = ContainerComponent;
  row = RowComponent;
  col = ColComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  columns = new FormControl(12);
  span = new FormControl(4);
  align = new FormControl(UI.flex.align.start);
  justify = new FormControl(UI.flex.justify.start);
  wrap = new FormControl(UI.flex.wrap.wrap);
  direction = new FormControl(UI.flex.direction.row);
  alignContent = new FormControl(UI.flex.alignContent.start);


  form = this.fb.group({
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

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }
}
