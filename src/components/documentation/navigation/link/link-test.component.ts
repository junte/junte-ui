import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { UI, LinkComponent, TabComponent } from 'junte-ui';

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

  @ViewChild('code', {static: false}) code: TabComponent;

  schemeControl = new FormControl(null);
  outlineControl = new FormControl(null);
  iconControl = new FormControl(false);
  sourceControl = new FormControl(SourceType.local);
  disableControl = new FormControl();
  targetControl = new FormControl(null);
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
