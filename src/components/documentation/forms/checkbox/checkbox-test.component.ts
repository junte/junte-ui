import { Component, ViewChild } from '@angular/core';
import { UI, TabComponent, CheckboxComponent } from 'junte-ui';
import { FormBuilder, FormControl } from '@angular/forms';
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
  hero = Hero;
  localUi = LocalUI;

  types = {checkbox: CheckboxComponent};

  @ViewChild('code') code: TabComponent;

  sizeControl = new FormControl(this.ui.size.normal);
  disableControl = new FormControl(false);

  builder = this.fb.group({
    size: this.sizeControl,
    disable: this.disableControl
  });

  heroControl = new FormControl([]);

  form = this.fb.group({
    hero: this.heroControl
  });

  constructor(private fb: FormBuilder) {
  }

}
