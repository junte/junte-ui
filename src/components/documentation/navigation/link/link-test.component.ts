import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LinkComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

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
  types = {link: LinkComponent};

  schemeControl = this.fb.control(null);
  outlineControl = this.fb.control(null);
  sourceControl = this.fb.control(SourceType.local);
  targetControl = this.fb.control(null);
  iconControl = this.fb.control(true);
  badgeControl = this.fb.control(true);
  disableControl = this.fb.control(false);
  builder = this.fb.group({
    scheme: this.schemeControl,
    outline: this.outlineControl,
    icon: this.iconControl,
    source: this.sourceControl,
    disable: this.disableControl,
    target: this.targetControl,
    badge: this.badgeControl
  });

  @ViewChild('code', {static: false}) code: TabComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
