import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {UI} from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { BadgeComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-badge-test',
  templateUrl: './badge-test.component.html',
  styleUrls: ['./badge-test.component.scss']
})
export class BadgeTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  badge = BadgeComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  positionControl = new FormControl(UI.position.rightTop);
  colorControl = new FormControl('#3949AB');
  overflowControl = new FormControl();
  valueControl = new FormControl(5);

  form = this.fb.group({
    position: this.positionControl,
    color: this.colorControl,
    overflow: this.overflowControl,
    value: this.valueControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }

}
