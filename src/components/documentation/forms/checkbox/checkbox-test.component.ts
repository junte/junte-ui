import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CheckboxComponent, TabComponent, BlockComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

export enum Hero {
  spiderman = 'spiderman',
  ironman = 'ironman',
  captainAmerica = 'captain_america'
}

@Component({
  selector: 'app-checkbox-test',
  templateUrl: './checkbox-test.component.html',
  styleUrls: ['./checkbox-test.component.scss']
})
export class CheckboxTestComponent {

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

  submit() {
    this.block.success();
    this.form.reset();
  }

}
