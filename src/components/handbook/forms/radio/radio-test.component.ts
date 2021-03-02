import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlockComponent, RadioComponent, RadioGroupComponent, TabComponent, UI } from 'junte-ui';
import { HANDBOOK, HEROES } from 'src/consts';
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
  heroes = HEROES;
  localUi = LocalUI;
  types = {radio: RadioComponent, group: RadioGroupComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/radio';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=2570%3A2782';

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => 0;

  @ViewChild('code') code: TabComponent;
  @ViewChild('block') block: BlockComponent;

  sizeControl = this.fb.control(null);
  disableControl = this.fb.control(false);
  colsControl = this.fb.control(1);
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

  heroControl = this.fb.control(this.heroes.captain.name, Validators.required);

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

    this.orientationControl.valueChanges.subscribe(value =>
      value === this.ui.orientation.horizontal ? this.heroControl.setValue(this.heroes.captain.name) : null);

  }

  submit() {
    this.block.success();
    setTimeout(() => this.form.reset(), 3000);
  }

}
