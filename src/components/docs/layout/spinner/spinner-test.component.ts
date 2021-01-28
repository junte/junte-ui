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

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/layout/spinner';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=2194%3A2';

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
