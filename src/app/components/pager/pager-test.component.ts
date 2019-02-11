import { Component } from '@angular/core';
import { UI } from 'projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-pager-test',
  templateUrl: './pager-test.component.html',
  styleUrls: ['./pager-test.component.scss']
})
export class PagerTestComponent {
  ui = UI;

  selectedPage = 1;
  pagesCount = 30;
  pageSize = 10;
  size = 3;
}
