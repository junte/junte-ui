import { Component, Input } from '@angular/core';
import { Language } from '../code-highlight/enum';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.scss']
})
export class HowToUseComponent {

  language = Language;

  @Input()
  test: { selector: string, type: string };

  @Input()
  scss: string;

}
