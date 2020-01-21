import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { BreadcrumbsComponent } from 'junte-ui';

@Component({
  selector: 'app-breadcrumbs-test',
  templateUrl: './breadcrumbs-test.component.html',
  styleUrls: ['./breadcrumbs-test.component.scss']
})
export class BreadcrumbsTestComponent {
  ui = UI;
  localUi = LocalUI;

  breadcrumb = BreadcrumbsComponent;
}
