import {Component, Inject, LOCALE_ID} from '@angular/core';
import {UI} from 'junte-ui';
import {Language} from 'src/enums/language';

@Component({
  selector: 'app-theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.scss']
})
export class ThemingComponent {

  ui = UI;
  language = Language;

  constructor(@Inject(LOCALE_ID) public locale: string) {
  }

}
