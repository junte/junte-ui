import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { UI, LinkComponent, TabComponent } from 'junte-ui';

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
export class LinkTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  link = LinkComponent;
  sourceType = SourceType;
  targetType = TargetType;
  localLink = ['/documentation', 'block'];

  @ViewChild('code', {static: false}) code: TabComponent;

  schemeControl = new FormControl(UI.scheme.primary);
  outlineControl = new FormControl(UI.outline.transparent);
  iconControl = new FormControl(false);
  sourceControl = new FormControl(SourceType.external);
  disableControl = new FormControl();
  targetControl = new FormControl(TargetType.self);
  badgeControl = new FormControl(false);

  form = this.fb.group({
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

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }

}
