import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { Language } from '../../shared/code-highlight/enum';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit, AfterViewInit {

  ui = UI;
  localUi = LocalUI;
  input = InputComponent;
  language = Language;

  @ViewChild('code') code: TabComponent;

  typeControl = this.fb.control(null);
  schemeControl = this.fb.control(null);
  sizeControl = this.fb.control(null);
  iconControl = this.fb.control(false);
  labelControl = this.fb.control(false);
  alignControl = this.fb.control(UI.text.align.left);
  disabledControl = this.fb.control(false);
  readonlyControl = this.fb.control(false);
  multilineControl = this.fb.control(false);
  rowsControl = this.fb.control(5);
  statesControl = this.fb.control(null);

  builder = this.fb.group({
    type: this.typeControl,
    scheme: this.schemeControl,
    size: this.sizeControl,
    icon: this.iconControl,
    label: this.labelControl,
    align: this.alignControl,
    disabled: this.disabledControl,
    readonly: this.readonlyControl,
    multiline: this.multilineControl,
    rows: this.rowsControl,
    states: this.statesControl,
  });

  inputControl = this.fb.control(null);
  form = this.fb.group({
    input: this.inputControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.disabledControl.valueChanges.subscribe(disabled => {
      disabled ? this.inputControl.disable() : this.inputControl.enable();
    });
  }

  ngAfterViewInit() {
    this.builder.valueChanges.subscribe(() => this.code.flash());
  }
}
