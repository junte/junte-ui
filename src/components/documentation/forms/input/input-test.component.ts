import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit, AfterViewInit {

  ui = UI;
  localUi = LocalUI;
  input = InputComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  typeControl = this.fb.control(UI.form.input.type.text);
  stateControl = this.fb.control(UI.form.input.state.normal);
  sizeControl = this.fb.control(UI.size.normal);
  iconControl = this.fb.control(false);
  labelControl = this.fb.control(false);
  alignControl = this.fb.control(UI.text.align.left);
  placeholderControl = this.fb.control(true);
  disabledControl = this.fb.control(false);
  minControl = this.fb.control({value: 1, disabled: true});
  maxControl = this.fb.control({value: 10, disabled: true});
  form = this.fb.group({
    type: this.typeControl,
    state: this.stateControl,
    size: this.sizeControl,
    icon: this.iconControl,
    label: this.labelControl,
    align: this.alignControl,
    placeholder: this.placeholderControl,
    max: this.maxControl,
    min: this.minControl,
    disabled: this.disabledControl,
  });

  inputControl = this.fb.control(null);
  inputForm = this.fb.group({
    input: this.inputControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.disabledControl.valueChanges.subscribe(disabled => {
      disabled ? this.inputControl.disable() : this.inputControl.enable();
    });

    this.typeControl.valueChanges.subscribe((type) => {
      if (type !== UI.form.input.type.number) {
        this.minControl.disable();
        this.maxControl.disable();
      } else {
        this.minControl.enable();
        this.maxControl.enable();
      }
    });
  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe(() => this.code.flash());
  }
}
