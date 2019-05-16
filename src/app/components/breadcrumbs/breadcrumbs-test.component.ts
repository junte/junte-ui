import { Component } from '@angular/core';
import { UI } from '../../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs-test.component.html',
  styleUrls: ['./breadcrumbs-test.component.scss']
})
export class BreadcrumbsTestComponent {
  ui = UI;
}
