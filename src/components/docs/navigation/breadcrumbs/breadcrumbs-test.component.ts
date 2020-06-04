import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { Language } from 'src/components/docs/shared/code-highlight/enum';
import { LocalUI } from 'src/enums/local-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-breadcrumbs-test',
  templateUrl: './breadcrumbs-test.component.html',
  styleUrls: ['./breadcrumbs-test.component.scss']
})
export class BreadcrumbsTestComponent {
  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  language = Language;
}
