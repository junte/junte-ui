import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { Language } from 'src/components/docs/shared/code-highlight/enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ui = UI;
  languages = Language;
}
