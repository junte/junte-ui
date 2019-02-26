import { Component, OnInit } from '@angular/core';
import { UI } from 'projects/junte-ui/src/lib/enum/ui';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pager-test',
  templateUrl: './pager-test.component.html',
  styleUrls: ['./pager-test.component.scss']
})
export class PagerTestComponent implements OnInit {
  ui = UI;

  form: FormGroup;
  selectedPage = 1;
  pagesCount = 30;
  pageSize = 10;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      page: [1]
    });
  }
}
