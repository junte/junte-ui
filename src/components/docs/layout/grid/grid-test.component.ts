import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ColComponent, ContainerComponent, RowComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-grid-test',
  templateUrl: './grid-test.component.html',
  styleUrls: ['./grid-test.component.scss']
})
export class GridTestComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  types = {container: ContainerComponent, row: RowComponent, col: ColComponent};

  @ViewChild('code') code: TabComponent;

  gutterControl = this.fb.control(null);
  alignControl = this.fb.control(null);
  justifyControl = this.fb.control(null);
  spanControl = this.fb.control(2);
  countControl = this.fb.control(4);
  paddingControl = this.fb.control(null);

  builder = this.fb.group({
    gutter: this.gutterControl,
    align: this.alignControl,
    justify: this.justifyControl,
    span: this.spanControl,
    count: this.countControl,
    padding: this.paddingControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
