import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ButtonComponent, ButtonGroupComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-button-test',
  templateUrl: './button-test.component.html',
  styleUrls: ['./button-test.component.scss']
})
export class ButtonTestComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  types = {button: ButtonComponent, group: ButtonGroupComponent};

  @ViewChild('code') code: TabComponent;

  schemeControl = this.fb.control(null);
  sizeControl = this.fb.control(null);
  outlineControl = this.fb.control(null);
  widthControl = this.fb.control(null);
  typeControl = this.fb.control(null);
  loadingControl = this.fb.control(false);
  disabledControl = this.fb.control(false);
  textControl = this.fb.control(true);
  iconControl = this.fb.control(true);
  badgeControl = this.fb.control(true);
  positionControl = this.fb.control(null);

  builder = this.fb.group({
    scheme: this.schemeControl,
    size: this.sizeControl,
    outline: this.outlineControl,
    width: this.widthControl,
    type: this.typeControl,
    loading: this.loadingControl,
    disabled: this.disabledControl,
    text: this.textControl,
    icon: this.iconControl,
    badge: this.badgeControl,
    position: this.positionControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
