import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BlockComponent, TabComponent, UI } from 'junte-ui';
import { Language as HighlightLanguage } from 'src/components/docs/shared/code-highlight/enum';
import { CATEGORIES } from 'src/consts';
import { Language } from '../../../../enums/language';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-blocks-test',
  templateUrl: './block-test.component.html',
  styleUrls: ['./block-test.component.scss']
})
export class BlockTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  highlight = {language: HighlightLanguage};
  categories = CATEGORIES;

  types = {block: BlockComponent};

  @ViewChild('block')
  block: BlockComponent;

  @ViewChild('code')
  code: TabComponent;

  paddingControl = this.fb.control(null);
  spacingControl = this.fb.control(null);
  widthControl = this.fb.control(null);
  titleControl = this.fb.control(true);
  footerControl = this.fb.control(true);
  headerControl = this.fb.control(false);
  stateControl = this.fb.control(null);
  adaptedControl = this.fb.control(false);
  helpControl = this.fb.control(false);

  builder = this.fb.group({
    padding: this.paddingControl,
    spacing: this.spacingControl,
    title: this.titleControl,
    footer: this.footerControl,
    header: this.headerControl,
    state: this.stateControl,
    width: this.widthControl,
    adapted: this.adaptedControl,
    help: this.helpControl
  });

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
