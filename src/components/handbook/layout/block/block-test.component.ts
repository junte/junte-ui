import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BlockComponent, TabsComponent, UI } from 'junte-ui';
import { Language as HighlightLanguage } from 'src/components/handbook/shared/code-highlight/enum';
import { HANDBOOK } from 'src/consts';
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
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/layout/block';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=2389%3A4155';

  types = {block: BlockComponent};

  @ViewChild('block')
  block: BlockComponent;

  @ViewChild('tabs') tabs: TabsComponent;

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
      .subscribe(() => this.tabs.flash(1));
  }
}
