import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI } from 'junte-ui';
import { Language } from 'src/enums/language';
import { CURRENT_LANGUAGE } from 'src/consts';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.scss']
})

export class SelectLangComponent implements OnInit {

  ui = UI;
  langs = Language;

  langControl = this.fb.control(CURRENT_LANGUAGE);

  form = this.fb.group({
    lang: this.langControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.langControl.valueChanges.subscribe(selected => {
      const pathname = document.location.pathname;
      const path = pathname.substring(pathname.indexOf('/', 1) + 1);
      document.location.href = `/${selected}/${path}`;
    });

  }
}
