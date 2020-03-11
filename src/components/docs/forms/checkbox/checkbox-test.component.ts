import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlockComponent, CheckboxComponent, TabComponent, UI } from 'junte-ui';
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
  hero = Hero;
  types = {checkbox: CheckboxComponent};

  @ViewChild('code') code: TabComponent;
  @ViewChild('block') block: BlockComponent;

  sizeControl = this.fb.control(null);
  disableControl = this.fb.control(false);

  builder = this.fb.group({
    size: this.sizeControl,
    disable: this.disableControl
  });

  heroesControl = this.fb.control([], Validators.required);

  form = this.fb.group({
    heroes: this.heroesControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.disableControl.valueChanges.subscribe(disabled =>
      disabled ? this.heroesControl.disable() : this.heroesControl.enable());
  }

  submit() {
    this.block.success();
    this.form.reset();
  }

}
