import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IconComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-icon-test',
  templateUrl: './icon-test.component.html',
  styleUrls: ['./icon-test.component.scss']
})
export class IconTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  icon = IconComponent;


  @ViewChild('code') code: TabComponent;

  icons = [];

  iconControl = this.fb.control({
    path: 'icons',
    name: 'map',
    value: UI.icons.animated.runningMan
  });

  builder = this.fb.group({
    icon: this.iconControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
