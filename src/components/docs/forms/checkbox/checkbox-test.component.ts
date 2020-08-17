import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlockComponent, CheckboxComponent, CheckboxGroupComponent, TabComponent, UI } from 'junte-ui';
import { Language } from 'src/components/docs/shared/code-highlight/enum';
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
  hero = Hero;
  types = {checkbox: CheckboxComponent, group: CheckboxGroupComponent};

  @ViewChild('code') code: TabComponent;
  @ViewChild('block') block: BlockComponent;

  sizeControl = this.fb.control(null);
  disableControl = this.fb.control(null);
  colsControl = this.fb.control(null);

  builder = this.fb.group({
    size: this.sizeControl,
    cols: this.colsControl,
    disable: this.disableControl
  });

  heroesControl = this.fb.control([Hero.spiderman], Validators.required);

  form = this.fb.group({
    heroes: this.heroesControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.disableControl.valueChanges.subscribe(disabled =>
      disabled ? this.heroesControl.disable() : this.heroesControl.enable());

    this.builder.valueChanges.subscribe(() => this.code.flash());
  }

  submit() {
    this.block.success();
    setTimeout(() => this.form.reset(), 3000);
  }
}
