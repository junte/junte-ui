import {Component, Inject, LOCALE_ID} from '@angular/core';
import {UI} from 'junte-ui';
import {Language as HighlightLanguage} from 'src/components/handbook/shared/code-highlight/enum';
import {Language} from 'src/enums/language';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ui = UI;
  language = Language;
  highlight = {language: HighlightLanguage};

  constructor(@Inject(LOCALE_ID) public locale: string) {
  }

}
