import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { SwitcherComponent } from 'junte-ui';
import { SwitcherOptionComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

export enum Cars {
  lamborghini = 'lamborghini',
  astonMartin = 'Aston Martin',
  bugatti = 'Bugatti',
  ferrari = 'Ferrari'
}

@Component({
  selector: 'app-switcher-test',
  templateUrl: './switcher-test.component.html',
  styleUrls: ['./switcher-test.component.scss']
})

export class SwitcherTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  cars = Cars;
  switcher = SwitcherComponent;
  switcherOption = SwitcherOptionComponent;

  @ViewChild('code') code: TabComponent;

  typeControl = this.fb.control(UI.orientation.horizontal);
  iconControl = this.fb.control(false);
  dotControl = this.fb.control(false);
  badgeControl = this.fb.control(false);

  form = this.fb.group({
    type: this.typeControl,
    icon: this.iconControl,
    dot: this.dotControl,
    badge: this.badgeControl,
  });

  switcherControl = this.fb.control(Cars.lamborghini);

  switcherForm = this.fb.group({
    switcher: this.switcherControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }
}
