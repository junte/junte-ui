import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabComponent, TabsComponent, UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';

@Component({
  selector: 'app-tabs-test',
  templateUrl: './tabs-test.component.html',
  styleUrls: ['./tabs-test.component.scss']
})
export class TabsTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {tabs: TabsComponent, tab: TabComponent};

  @ViewChild('code', {static: false}) code: TabComponent;

  outlineControl = this.fb.control(null);
  iconsControl = this.fb.control(true);
  badgesControl = this.fb.control(true);

  builder = this.fb.group({
    outline: this.outlineControl,
    icons: this.iconsControl,
    badges: this.badgesControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
