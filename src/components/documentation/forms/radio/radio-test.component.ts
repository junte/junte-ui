import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { RadioComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-radio-test',
  templateUrl: './radio-test.component.html',
  styleUrls: ['./radio-test.component.scss']
})
export class RadioTestComponent implements OnInit {
  ui = UI;
  localUi = LocalUI;
  radio = RadioComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  sizeControl = new FormControl(this.ui.size.small);
  disableControl = new FormControl(false);
  checkedControl = new FormControl(false);
  labelControl = new FormControl('Label 1');
  radioGroupControl = new FormControl();

  form = this.fb.group({
    size: this.sizeControl,
    disable: this.disableControl,
    checked: this.checkedControl,
    label: this.labelControl
  });

  formRadioGroup = this.fb.group({
    radioGroup: this.radioGroupControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }
}
