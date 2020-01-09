import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { Outline } from 'junte-ui';
import { TabsComponent } from 'junte-ui';
import { TabComponent } from 'junte-ui';

@Component({
  selector: 'app-tabs-test',
  templateUrl: './tabs-test.component.html',
  styleUrls: ['./tabs-test.component.scss']
})
export class TabsTestComponent {

  ui = UI;
  localUi = LocalUI;
  tabs = TabsComponent;
  tab = TabComponent;

  iconControl = new FormControl(false);
  outlineControl = new FormControl(Outline.fill);
  badgeControl = new FormControl(false);

  tabBuilder = this.fb.group({
    icon: this.iconControl,
    outline: this.outlineControl,
    badge: this.badgeControl
  });

  constructor(private fb: FormBuilder) {
  }

}
