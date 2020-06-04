import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlockComponent, SwitcherComponent, SwitcherOptionComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { Hero } from 'src/enums/hero';
import { Language } from '../../shared/code-highlight/enum';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-switcher-test',
  templateUrl: './switcher-test.component.html',
  styleUrls: ['./switcher-test.component.scss']
})

export class SwitcherTestComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  hero = Hero;
  language = Language;
  types = {switcher: SwitcherComponent, option: SwitcherOptionComponent};

  @ViewChild('code') code: TabComponent;
  @ViewChild('block') block: BlockComponent;

  modeControl = this.fb.control(null);
  orientationControl = this.fb.control(null);
  iconControl = this.fb.control(false);
  dotControl = this.fb.control(true);
  badgeControl = this.fb.control(false);
  templateControl = this.fb.control(false);
  allowEmptyControl = this.fb.control(true);
  marksControl = this.fb.control(true);
  disabledControl = this.fb.control(false);
  heightControl = this.fb.control(false);

  builder = this.fb.group({
    mode: this.modeControl,
    orientation: this.orientationControl,
    icon: this.iconControl,
    dot: this.dotControl,
    badge: this.badgeControl,
    template: this.templateControl,
    allowEmpty: this.allowEmptyControl,
    marks: this.marksControl,
    disabled: this.disabledControl,
    height: this.heightControl
  });

  heroControl = this.fb.control(null, Validators.required);

  form = this.fb.group({
    hero: this.heroControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());

    this.templateControl.valueChanges
      .subscribe(value => {
        if (value) {
          this.iconControl.disable();
          this.dotControl.disable();
          this.badgeControl.disable();
        } else {
          this.iconControl.enable();
          this.dotControl.enable();
          this.badgeControl.enable();
        }
      });

    this.disabledControl.valueChanges.subscribe((disabled) => {
      disabled ? this.heroControl.disable() : this.heroControl.enable();
    });
  }

  submit() {
    this.block.success();
    this.form.reset();
  }
}
