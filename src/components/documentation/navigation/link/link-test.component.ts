import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { Schemes } from 'junte-ui';
import { LinkComponent } from 'junte-ui';
import { Outline } from 'junte-ui';

export enum SourceType {
  external = 'external',
  local = 'local'
}

export enum TargetType {
  self = '_self',
  blank = '_blank',
  parent = '_parent',
  top = '_top'
}

@Component({
  selector: 'app-link-test',
  templateUrl: './link-test.component.html',
  styleUrls: ['./link-test.component.scss']
})
export class LinkTestComponent {

  ui = UI;
  localUi = LocalUI;
  link = LinkComponent;
  sourceType = SourceType;
  targetType = TargetType;
  localLink = ['/documentation', 'block'];

  schemeControl = new FormControl(Schemes.primary);
  outlineControl = new FormControl(Outline.transparent);
  iconControl = new FormControl(false);
  sourceControl = new FormControl(SourceType.external);
  disableControl = new FormControl();
  targetControl = new FormControl(TargetType.self);
  badgeControl = new FormControl(false);

  linkBuilder = this.fb.group({
    scheme: this.schemeControl,
    outline: this.outlineControl,
    icon: this.iconControl,
    source: this.sourceControl,
    disable: this.disableControl,
    target: this.targetControl,
    badge: this.badgeControl
  });

  constructor(private fb: FormBuilder) {
  }

}
