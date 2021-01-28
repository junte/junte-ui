import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StackComponent, TabComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import {Language as HighlightLanguage} from '../../shared/code-highlight/enum';
import {Language} from '../../../../enums/language';

@Component({
  selector: 'app-stack-test',
  templateUrl: './stack-test.component.html',
  styleUrls: ['./stack-test.component.scss']
})
export class StackTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  highlight = {language: HighlightLanguage};
  handbook = HANDBOOK;

  types = {stack: StackComponent};

  @ViewChild('code') code: TabComponent;

  typeControl = this.fb.control(null);
  gutterControl = this.fb.control(null);
  spacingControl = this.fb.control(null);
  paddingControl = this.fb.control(null);
  alignControl = this.fb.control(null);
  justifyControl = this.fb.control(null);
  wrapControl = this.fb.control(null);

  builder = this.fb.group({
    type: this.typeControl,
    gutter: this.gutterControl,
    spacing: this.spacingControl,
    padding: this.paddingControl,
    align: this.alignControl,
    justify: this.justifyControl,
    wrap: this.wrapControl
  });

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
