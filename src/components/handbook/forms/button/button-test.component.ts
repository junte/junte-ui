import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ButtonComponent, ButtonGroupComponent, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-button-test',
  templateUrl: './button-test.component.html',
  styleUrls: ['./button-test.component.scss']
})
export class ButtonTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {button: ButtonComponent, group: ButtonGroupComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/button';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI?node-id=114%3A0';

  @ViewChild('tabs') tabs: TabsComponent;

  schemeControl = this.fb.control(null);
  sizeControl = this.fb.control(null);
  outlineControl = this.fb.control(null);
  widthControl = this.fb.control(null);
  typeControl = this.fb.control(null);
  loadingControl = this.fb.control(false);
  disabledControl = this.fb.control(false);
  textControl = this.fb.control(true);
  iconControl = this.fb.control(true);
  badgeControl = this.fb.control(true);
  positionControl = this.fb.control(null);
  shapeControl = this.fb.control(null);

  builder = this.fb.group({
    scheme: this.schemeControl,
    size: this.sizeControl,
    outline: this.outlineControl,
    width: this.widthControl,
    type: this.typeControl,
    loading: this.loadingControl,
    disabled: this.disabledControl,
    text: this.textControl,
    icon: this.iconControl,
    badge: this.badgeControl,
    position: this.positionControl,
    shape: this.shapeControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }
}
