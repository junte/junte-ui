import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputComponent, TabsComponent, UI, InputType } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import { Language as HighlightLanguage } from 'src/components/handbook/shared/code-highlight/enum';
import { Language } from 'src/enums/language';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  input = InputComponent;
  inputType = InputType;
  language = Language;
  highlight = {language: HighlightLanguage};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/input';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI?node-id=700%3A0';

  @ViewChild('tabs') tabs: TabsComponent;

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
  allowEmptyControl = this.fb.control(false);
  autocompleteControl = this.fb.control(false);
  copyControl = this.fb.control(false);

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
    allowEmpty: this.allowEmptyControl,
    autocomplete: this.autocompleteControl,
    copy: this.copyControl
  });

  inputControl = this.fb.control(null);
  form = this.fb.group({
    input: this.inputControl
  });

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {

    this.disabledControl.valueChanges.subscribe(disabled => {
      disabled ? this.inputControl.disable({emitEvent: false}) : this.inputControl.enable({emitEvent: false});
    });
    this.reset(this.typeControl.value);
    this.typeControl.valueChanges.subscribe(type => this.reset(type));
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

  test() {
    this.form.patchValue({input: '1234567890'});
  }

  reset(type: InputType) {
    if (type !== this.inputType.number) {
      this.stepControl.disable({emitEvent: false});
      this.minControl.disable({emitEvent: false});
      this.maxControl.disable({emitEvent: false});
      this.multilineControl.enable({emitEvent: false});
      this.rowsControl.enable({emitEvent: false});
    } else {
      this.stepControl.enable({emitEvent: false});
      this.minControl.enable({emitEvent: false});
      this.maxControl.enable({emitEvent: false});
      this.multilineControl.disable({emitEvent: false});
      this.rowsControl.disable({emitEvent: false});
    }
  }
}
