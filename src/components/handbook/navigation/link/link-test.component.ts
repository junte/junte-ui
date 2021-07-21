import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LinkComponent, UI, TabsComponent } from 'junte-ui';
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

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/navigation/link';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI?node-id=1080%3A1554';

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

  @ViewChild('tabs') tabs: TabsComponent;

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

}
