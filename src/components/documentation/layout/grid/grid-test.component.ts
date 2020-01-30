import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ColComponent, ContainerComponent, RowComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-grid-test',
  templateUrl: './grid-test.component.html',
  styleUrls: ['./grid-test.component.scss']
})
export class GridTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {container: ContainerComponent, row: RowComponent, col: ColComponent};

  @ViewChild('code', {static: false}) code: TabComponent;

  gutterControl = this.fb.control(null);
  alignControl = this.fb.control(null);
  spanControl = this.fb.control(null);

  form = this.fb.group({
    gutter: this.gutterControl,
    align: this.alignControl,
    span: this.spanControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }
}
