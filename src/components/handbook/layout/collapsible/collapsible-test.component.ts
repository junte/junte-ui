import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabsComponent, UI } from 'junte-ui';
import { CollapsibleComponent } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import {Language} from '../../../../enums/language';

@Component({
  selector: 'app-collapsible-test',
  templateUrl: './collapsible-test.component.html',
  styleUrls: ['./collapsible-test.component.scss']
})
export class CollapsibleTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  types = {collapsible: CollapsibleComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/layout/informer';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=9211%3A0';

  @ViewChild('tabs') tabs: TabsComponent;

  titleControl = this.fb.control(false);
  iconControl = this.fb.control(true);
  openedControl = this.fb.control(false);
  orientationControl = this.fb.control(false);

  builder = this.fb.group({
    title: this.titleControl,
    icon: this.iconControl,
    opened: this.openedControl,
    orientation: this.orientationControl
  });

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));

    this.titleControl.valueChanges.subscribe(value =>
      value ? this.iconControl.disable({emitEvent: false}) : this.iconControl.enable({emitEvent: false}));
  }

}
