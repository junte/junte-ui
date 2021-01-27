import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabComponent, TabsComponent, UI } from 'junte-ui';
import { CATEGORIES } from 'src/consts';
import { Language } from '../../../../enums/language';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-tabs-test',
  templateUrl: './tabs-test.component.html',
  styleUrls: ['./tabs-test.component.scss']
})
export class TabsTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  types = {tabs: TabsComponent, tab: TabComponent};
  categories = CATEGORIES;

  outlineControl = this.fb.control(null);
  iconsControl = this.fb.control(true);
  badgesControl = this.fb.control(true);
  adaptedControl = this.fb.control(true);

  builder = this.fb.group({
    outline: this.outlineControl,
    icons: this.iconsControl,
    badges: this.badgesControl,
    adapted: this.adaptedControl
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
