import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlockComponent, CheckboxComponent, CheckboxGroupComponent, TabComponent, UI } from 'junte-ui';
import { Language } from 'src/components/handbook/shared/code-highlight/enum';
import { HANDBOOK, HEROES } from 'src/consts';
import { Hero } from 'src/enums/hero';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-checkbox-test',
  templateUrl: './checkbox-test.component.html',
  styleUrls: ['./checkbox-test.component.scss']
})
export class CheckboxTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  types = {checkbox: CheckboxComponent, group: CheckboxGroupComponent};
  handbook = HANDBOOK;
  heroes = HEROES;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/checkbox';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=2570%3A2779';

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => 0;

  @ViewChild('code') code: TabComponent;
  @ViewChild('block') block: BlockComponent;

  sizeControl = this.fb.control(null);
  disableControl = this.fb.control(null);
  colsControl = this.fb.control(null);
  customControl = this.fb.control(false);

  builder = this.fb.group({
    size: this.sizeControl,
    cols: this.colsControl,
    disable: this.disableControl,
    custom: this.customControl
  });

  heroControl = this.fb.control([Hero.spiderman], Validators.required);

  form = this.fb.group({
    hero: this.heroControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.disableControl.valueChanges.subscribe(disabled =>
      disabled ? this.heroControl.disable({emitEvent: false}) : this.heroControl.enable({emitEvent: false}));

    this.builder.valueChanges.subscribe(() => this.code.flash());

    this.heroControl.patchValue([Hero.ironman]);
  }

  submit() {
    this.block.success();
    setTimeout(() => this.form.reset(), 3000);
  }

  set() {
    this.heroControl.setValue([Hero.captainAmerica]);
  }
}
