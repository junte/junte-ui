import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { SwitchComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-switch-test',
  templateUrl: './switch-test.component.html',
  styleUrls: ['./switch-test.component.scss']
})
export class SwitchTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  switch = SwitchComponent;

  @ViewChild('code') code: TabComponent;

  sizeControl = new FormControl(UI.size.normal);
  labelControl = new FormControl(true);
  iconOnControl = new FormControl(false);
  iconOffControl = new FormControl(false);
  labelOnControl = new FormControl(false);
  labelOffControl = new FormControl(false);
  disabledControl = new FormControl(false);

  form = this.fb.group({
    size: this.sizeControl,
    label: this.labelControl,
    iconOn: this.iconOnControl,
    iconOff: this.iconOffControl,
    labelOn: this.labelOnControl,
    labelOff: this.labelOffControl,
    disabled: this.disabledControl,
  });

  switchControl = this.fb.control(true);

  switchForm = this.fb.group({
    switch: this.switchControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.disabledControl.valueChanges.subscribe((disabled) => {
      disabled ? this.switchControl.disable() : this.switchControl.enable();
    });

    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }
}
