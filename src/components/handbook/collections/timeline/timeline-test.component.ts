import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  TabsComponent,
  TimelineComponent,
  TimelineItemDirective,
  UI
} from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { Language as HighlightLanguage } from '../../shared/code-highlight/enum';
import { Language } from '../../../../enums/language';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-timeline-test',
  templateUrl: './timeline-test.component.html',
  styleUrls: ['./timeline-test.component.scss']
})
export class TimelineTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  highlight = {language: HighlightLanguage};
  types = {timeline: TimelineComponent, item: TimelineItemDirective};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/collections/timeline';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=6587%3A0';

  @ViewChild('tabs') tabs: TabsComponent;

  iconControl = this.fb.control(false);
  colorControl = this.fb.control(this.ui.color.primary);

  builder = this.fb.group({
    icon: this.iconControl,
    color: this.colorControl
  });

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

}
