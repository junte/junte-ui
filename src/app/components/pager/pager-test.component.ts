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
  pagesCount = 30;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      page: [1],
      pageSize: [10]
    });
  }
}
