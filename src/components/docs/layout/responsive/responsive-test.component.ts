import { Component, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { TabComponent, UI, ForDirective, ForMinDirective, ForMaxDirective } from 'junte-ui';
import { Language as HighlightLanguage } from '../../shared/code-highlight/enum';
import { Language } from '../../../../enums/language';
import { LocalUI } from 'src/enums/local-ui';
import { SelectorType } from '../../shared/component-api/enums';

@Component({
  selector: 'app-responsive-test',
  templateUrl: './responsive-test.component.html',
  styleUrls: ['./responsive-test.component.scss']
})
export class ResponsiveTestComponent {

  ui = UI;
  localUi = LocalUI;
  selectorType = SelectorType;
  language = Language;
  highlight = {language: HighlightLanguage};

  types = {for: ForDirective, min: ForMinDirective, max: ForMaxDirective};

  @ViewChild('code') code: TabComponent;

  constructor(@Inject(LOCALE_ID) public locale: string) {
  }

}
