import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SwitchComponent, TabComponent, UI } from 'junte-ui';
import { Language } from '../../shared/code-highlight/enum';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-switch-test',
  templateUrl: './switch-test.component.html',
  styleUrls: ['./switch-test.component.scss']
})
export class SwitchTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {switch: SwitchComponent};
  language = Language;

  @ViewChild('code') code: TabComponent;

  sizeControl = this.fb.control(null);
  labelControl = this.fb.control(true);
  iconsControl = this.fb.control(true);
  tagsControl = this.fb.control(true);
  disabledControl = this.fb.control(false);

  builder = this.fb.group({
    size: this.sizeControl,
    label: this.labelControl,
    icons: this.iconsControl,
    tags: this.tagsControl,
    disabled: this.disabledControl
  });

  switchControl = this.fb.control(false);

  form = this.fb.group({
    switch: this.switchControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.disabledControl.valueChanges.subscribe((disabled) => {
      disabled ? this.switchControl.disable({emitEvent: false}) : this.switchControl.enable({emitEvent: false});
    });

    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
