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

  typeControl = this.fb.control(null);
  stateControl = this.fb.control(null);
  sizeControl = this.fb.control(null);
  iconControl = this.fb.control(false);
  labelControl = this.fb.control(false);
  alignControl = this.fb.control(UI.text.align.left);
  placeholderControl = this.fb.control(true);
  disabledControl = this.fb.control(false);
  builder = this.fb.group({
    type: this.typeControl,
    state: this.stateControl,
    size: this.sizeControl,
    icon: this.iconControl,
    label: this.labelControl,
    align: this.alignControl,
    placeholder: this.placeholderControl,
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
  }

  ngAfterViewInit() {
    this.builder.valueChanges.subscribe(() => this.code.flash());
  }
}
