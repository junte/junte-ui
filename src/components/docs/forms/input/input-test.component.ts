import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputComponent, TabComponent, UI } from 'junte-ui';
import { InputType } from 'projects/junte-ui/src/lib/forms/input/enums';
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
  inputType = InputType;

  @ViewChild('code') code: TabComponent;

  typeControl = this.fb.control(null);
  schemeControl = this.fb.control(null);
  sizeControl = this.fb.control(null);
  iconControl = this.fb.control(false);
  labelControl = this.fb.control(false);
  maskControl = this.fb.control(false);
  alignControl = this.fb.control(null);
  disabledControl = this.fb.control(false);
  readonlyControl = this.fb.control(false);
  multilineControl = this.fb.control(false);
  stepControl = this.fb.control(null);
  rowsControl = this.fb.control(5);
  statesControl = this.fb.control(null);
  minControl = this.fb.control(null);
  maxControl = this.fb.control(null);
  transformControl = this.fb.control(null);
  clearControl = this.fb.control(false);

  builder = this.fb.group({
    type: this.typeControl,
    scheme: this.schemeControl,
    size: this.sizeControl,
    icon: this.iconControl,
    label: this.labelControl,
    mask: this.maskControl,
    align: this.alignControl,
    disabled: this.disabledControl,
    readonly: this.readonlyControl,
    multiline: this.multilineControl,
    rows: this.rowsControl,
    steps: this.stepControl,
    states: this.statesControl,
    min: this.minControl,
    max: this.maxControl,
    transform: this.transformControl,
    clear: this.clearControl,
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
    this.reset(this.typeControl.value);
    this.typeControl.valueChanges.subscribe(type => this.reset(type));
  }

  ngAfterViewInit() {
    this.builder.valueChanges.subscribe(() => this.code.flash());
  }

  test() {
    this.form.patchValue({input: '90515513360'});
  }

  reset(type: InputType) {
    if (type !== this.inputType.number) {
      this.stepControl.disable();
      this.minControl.disable();
      this.maxControl.disable();
      this.multilineControl.enable();
      this.rowsControl.enable();
    } else {
      this.stepControl.enable();
      this.minControl.enable();
      this.maxControl.enable();
      this.multilineControl.disable();
      this.rowsControl.disable();
    }
  }
}
