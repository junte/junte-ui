import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabComponent, UI } from 'junte-ui';
import { PagerComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-pager-test',
  templateUrl: './pager-test.component.html',
  styleUrls: ['./pager-test.component.scss']
})
export class PagerTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {pager: PagerComponent};

  countControl = this.fb.control(50);
  pageSizeControl = this.fb.control(15);
  modeControl = this.fb.control(UI.pager.mode.offset);
  builder = this.fb.group({
    count: this.countControl,
    pageSize: this.pageSizeControl,
    mode: this.modeControl
  });

  pageControl = this.fb.control(null);
  form = this.fb.group({
    page: this.pageControl
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.countControl.valueChanges.subscribe(() => {
      this.code.flash();
      this.pageControl.patchValue(1);
    });
  }
}
