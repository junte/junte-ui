import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StackComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { Language } from '../../shared/code-highlight/enum';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-stack-test',
  templateUrl: './stack-test.component.html',
  styleUrls: ['./stack-test.component.scss']
})
export class StackTestComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  language = Language;

  types = {stack: StackComponent};

  @ViewChild('code') code: TabComponent;

  typeControl = this.fb.control(UI.layout.stack.type.horizontal);
  gutterControl = this.fb.control(null);
  alignControl = this.fb.control(null);
  justifyControl = this.fb.control(null);
  wrapControl = this.fb.control(null);

  builder = this.fb.group({
    type: this.typeControl,
    gutter: this.gutterControl,
    align: this.alignControl,
    justify: this.justifyControl,
    wrap: this.wrapControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
