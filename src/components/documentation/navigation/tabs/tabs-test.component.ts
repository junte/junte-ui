import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
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
export class TabsTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  tabs = TabsComponent;
  tab = TabComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  outlineControl = new FormControl(Outline.fill);
  iconsControl = new FormControl(false);

  form = this.fb.group({
    outline: this.outlineControl,
    icons: this.iconsControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }

}
