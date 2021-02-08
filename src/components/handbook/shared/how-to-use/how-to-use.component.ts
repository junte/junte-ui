import { Component, ContentChild, Inject, Input, LOCALE_ID, TemplateRef } from '@angular/core';
import { Language as HighlightLanguage } from '../code-highlight/enum';
import { Language } from '../../../../enums/language';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.scss']
})
export class HowToUseComponent {

  language = Language;
  highlight = {language: HighlightLanguage};

  @Input()
  test: { selector: string, type: string };

  @Input()
  scss: string;

  @ContentChild('behaviourTemplate')
  behaviourTemplate: TemplateRef<any>;

  constructor(@Inject(LOCALE_ID) public locale: string) {
  }

}
