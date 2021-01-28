import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import { UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import { FormBuilder } from '@angular/forms';
import { SpinnerComponent } from 'junte-ui';
import {Language} from '../../../../enums/language';

@Component({
  selector: 'app-spinner-test',
  templateUrl: './spinner-test.component.html',
  styleUrls: ['./spinner-test.component.scss']
})
export class SpinnerTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  types = {spinner: SpinnerComponent};
  handbook = HANDBOOK;

  @ViewChild('code') code: TabComponent;


  sizeControl = this.fb.control(null);

  builder = this.fb.group({
    size: this.sizeControl,
  });

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
