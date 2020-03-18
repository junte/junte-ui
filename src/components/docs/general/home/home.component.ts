import { Component, OnInit } from '@angular/core';
import { UI } from 'junte-ui';
import { Language } from 'src/components/docs/shared/code-highlight/enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ui = UI;
  languages = Language;

  constructor() {
  }

  ngOnInit() {
  }

}
