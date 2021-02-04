import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabComponent, UI } from 'junte-ui';
import { PagerComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { HANDBOOK } from 'src/consts';

@Component({
  selector: 'app-pager-test',
  templateUrl: './pager-test.component.html',
  styleUrls: ['./pager-test.component.scss']
})
export class PagerTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {pager: PagerComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/navigation/pager';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI?node-id=1472%3A3614';

  countControl = this.fb.control(50);
  pageSizeControl = this.fb.control(15);
  pagerSizeControl = this.fb.control(3);
  modeControl = this.fb.control(UI.pager.mode.offset);
  builder = this.fb.group({
    count: this.countControl,
    pageSize: this.pageSizeControl,
    mode: this.modeControl,
    pagerSize: this.pagerSizeControl
  });

  offsetControl = this.fb.control(null);
  pageControl = this.fb.control(0);
  form = this.fb.group({
    offset: this.offsetControl,
    page: this.pageControl
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges.subscribe(() => {
      this.code.flash();
      this.offsetControl.patchValue(0);
      this.pageControl.patchValue(1);
    });
  }
}
