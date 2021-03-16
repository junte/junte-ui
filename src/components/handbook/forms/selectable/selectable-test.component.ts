import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BreakpointService, SelectableDirective, TabComponent, UI } from 'junte-ui';
import { Language } from 'src/components/handbook/shared/code-highlight/enum';
import { HANDBOOK, HEROES } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-selectable-test',
  templateUrl: './selectable-test.component.html',
  styleUrls: ['./selectable-test.component.scss']
})
export class SelectableTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  selectable = SelectableDirective;
  handbook = HANDBOOK;
  heroes = HEROES;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/core/directives/selectable';

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => 0;

  @ViewChild('code') code: TabComponent;

  modeControl = this.fb.control(UI.select.mode.single);
  disabledControl = this.fb.control(false);
  allowEmptyControl = this.fb.control(true);

  builder = this.fb.group({
    mode: this.modeControl,
    disabled: this.disabledControl,
    allowEmpty: this.allowEmptyControl
  });

  selectableControl = this.fb.control(null);
  selectableForm = this.fb.group({
    selectable: this.selectableControl
  });

  constructor(private fb: FormBuilder,
              public breakpoint: BreakpointService) {
  }

  ngOnInit() {
    this.builder.valueChanges.subscribe(() => this.code.flash());
    this.modeControl.valueChanges.subscribe(() => {
     this.selectableControl.reset();
     this.modeControl.value ? this.modeControl.value : this.modeControl.setValue(this.ui.select.mode.single);
    });
    this.disabledControl.valueChanges.subscribe(disabled =>
      disabled ? this.selectableControl.disable({emitEvent: false}) : this.selectableControl.enable({emitEvent: false}));
  }

}
