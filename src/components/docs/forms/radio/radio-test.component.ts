import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlockComponent, RadioComponent, RadioGroupComponent, TabComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { Hero } from 'src/enums/hero';
import { LocalUI } from 'src/enums/local-ui';
import { Language } from '../../shared/code-highlight/enum';

@Component({
  selector: 'app-radio-test',
  templateUrl: './radio-test.component.html',
  styleUrls: ['./radio-test.component.scss']
})
export class RadioTestComponent implements OnInit {

  ui = UI;
  language = Language;
  hero = Hero;
  localUi = LocalUI;
  types = {radio: RadioComponent, group: RadioGroupComponent};
  handbook = HANDBOOK;

  @ViewChild('code') code: TabComponent;
  @ViewChild('block') block: BlockComponent;

  sizeControl = this.fb.control(null);
  disableControl = this.fb.control(false);
  colsControl = this.fb.control(null);
  customControl = this.fb.control(false);
  orientationControl = this.fb.control(false);
  spacingControl = this.fb.control(false);
  adaptedControl = this.fb.control(false);

  builder = this.fb.group({
    size: this.sizeControl,
    disable: this.disableControl,
    cols: this.colsControl,
    custom: this.customControl,
    orientation: this.orientationControl,
    spacing: this.spacingControl,
    adapted: this.adaptedControl
  });

  heroControl = this.fb.control(Hero.spiderman, Validators.required);

  form = this.fb.group({
    hero: this.heroControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.disableControl.valueChanges.subscribe(disabled =>
      disabled ? this.heroControl.disable({emitEvent: false}) : this.heroControl.enable({emitEvent: false}));

    this.colsControl.valueChanges.subscribe(value =>
      value > 1 ? this.orientationControl.disable() : this.orientationControl.enable());
  }

  submit() {
    this.block.success();
    setTimeout(() => this.form.reset(), 3000);
  }

}
