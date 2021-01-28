import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LinkComponent, TabComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import {Language} from '../../../../enums/language';

enum SourceType {
  external = 'external',
  local = 'local'
}

@Component({
  selector: 'app-link-test',
  templateUrl: './link-test.component.html',
  styleUrls: ['./link-test.component.scss']
})
export class LinkTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  sourceType = SourceType;
  language = Language;
  types = {link: LinkComponent};
  handbook = HANDBOOK;

  schemeControl = this.fb.control(null);
  outlineControl = this.fb.control(null);
  sourceControl = this.fb.control(SourceType.local);
  targetControl = this.fb.control(null);
  iconControl = this.fb.control(true);
  badgeControl = this.fb.control(true);
  disabledControl = this.fb.control(false);
  positionControl = this.fb.control(null);
  builder = this.fb.group({
    scheme: this.schemeControl,
    outline: this.outlineControl,
    icon: this.iconControl,
    source: this.sourceControl,
    disabled: this.disabledControl,
    target: this.targetControl,
    badge: this.badgeControl,
    position: this.positionControl
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
